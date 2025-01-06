import PropTypes from "prop-types";
import { useState, createContext } from "react";
import { getShortedURL } from "../services/getShortedURL";

export const ShortenContext = createContext({});

export const ShortenContextProvider = ({ children }) => {
  const [url, setUrl] = useState("");
  const [shortedUrls, setShortedUrls] = useState([]);
  const [error, setError] = useState(false);

  const handleInputUrl = (evt) => {
    const userUrl = evt.target.value;
    setUrl(userUrl);
  };

  const getUrl = async (url) => {
    const data = await getShortedURL(url);

    if (data) {
      setShortedUrls((prevState) => {
        const newUrl = {
          longUrl: data.url,
          shortUrl: data.shortUrl,
        };
        return [...prevState, newUrl];
      });
    }
  };

  const handleSubmit = () => {
    const urlPattern = new RegExp(
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]{1,}\.[a-zA-Z]{2,})([/a-zA-Z0-9#]+)?$/
    );

    if (urlPattern.test(url)) {
      setError(false);
      getUrl(url);
    } else {
      setError(true);
      return;
    }
  };

  return (
    <ShortenContext.Provider
      value={{ url, error, handleInputUrl, handleSubmit, shortedUrls }}
    >
      {children}
    </ShortenContext.Provider>
  );
};

ShortenContextProvider.propTypes = {
  children: PropTypes.element,
};
