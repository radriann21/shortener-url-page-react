import { useContext, useState } from "react";
import { ShortenContext } from "../context/ShortenContext";

export const DisplayLinks = () => {
  const { shortedUrls, error } = useContext(ShortenContext);
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (shortedUrls.length === 0) {
    return null;
  }

  if (error) {
    return (
      <h2 className="font-primaryBold text-red-500 text-center">
        {error.message}
      </h2>
    );
  }

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Error al copiar texto: ", err);
    }
  };

  return (
    <ul className="w-full flex flex-col items-center space-y-8 mt-10">
      {shortedUrls.map((shorted, index) => (
        <li
          className="w-full p-4 bg-white rounded-md shadow-md flex flex-col sm:flex-row items-center justify-between"
          key={index}
        >
          <div className="font-primaryRegular text-neutral-very-dark-violet ">
            {shorted.longUrl}
          </div>
          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-8">
            <span className="text-primary-custom-cyan font-primaryRegular">
              {shorted.shortUrl}
            </span>
            <button
              onClick={() => copyToClipboard(shorted.shortUrl, index)}
              className={`w-full sm:w-fit py-2 px-6 text-white bg-primary-custom-cyan rounded-md transition-colors duration-300 hover:bg-opacity-60 ${
                copiedIndex === index ? "bg-primary-dark-violet" : null
              }`}
            >
              {copiedIndex === index ? "Copied" : "Copy"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
