import { useContext } from "react";
import { ShortenContext } from "../context/ShortenContext";

export const LinksInput = () => {
  const { handleSubmit, handleInputUrl, error } = useContext(ShortenContext);

  return (
    <section className="w-full p-8 rounded-md bg-primary-dark-violet bg-shorten-pattern-mobile sm:bg-shorten-pattern-desktop bg-cover bg-no-repeat">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:w-[80%] relative">
          <input
            onChange={handleInputUrl}
            className={`outline-none w-full rounded-md p-2 placeholder:text-neutral-grayish-violet placeholder:font-primaryRegular placeholder:text-sm ${
              error ? "border-2 border-red-600" : null
            }`}
            type="text"
            placeholder="Shorten a link here..."
          />
          <span className="absolute -bottom-5 left-0 text-sm italic font-primaryRegular text-red-600">
            {error ? "Please add a link" : null}
          </span>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full sm:w-fit mt-8 sm:mt-0 px-4 py-2 text-white rounded-md bg-primary-custom-cyan font-bold transition-colors duration-300 hover:bg-cyan-300"
        >
          Shorten it!
        </button>
      </div>
    </section>
  );
};
