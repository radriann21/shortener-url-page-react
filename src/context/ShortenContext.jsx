import PropTypes from "prop-types";
import { useState, createContext } from "react";

export const ShortenContext = createContext({});

export const ShortenContextProvider = ({ children }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);

  const handleInputUrl = (evt) => {
    const userUrl = evt.target.value;
    setUrl(userUrl);
    console.log(url);
  };

  const handleSubmit = () => {
    const urlPattern = new RegExp(
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]{1,}\.[a-zA-Z]{2,})([/a-zA-Z0-9#]+)?$/
    );

    if (urlPattern.test(url)) {
      setError(false);
    } else {
      setError(true);
      return;
    }
  };

  return (
    <ShortenContext.Provider
      value={{ url, error, handleInputUrl, handleSubmit }}
    >
      {children}
    </ShortenContext.Provider>
  );
};

ShortenContextProvider.propTypes = {
  children: PropTypes.element,
};
