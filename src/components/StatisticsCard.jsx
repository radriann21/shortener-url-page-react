import PropTypes from "prop-types";

export const StatisticsCard = ({ title, text, margin, icon }) => {
  return (
    <article
      className={`bg-white px-8 py-12 rounded-md shadow-md w-[50%] z-10 ${margin} relative`}
    >
      <div className="w-20 h-20 rounded-full bg-primary-dark-violet -translate-y-24 absolute flex items-center justify-center">
        <img src={icon} alt="icon" />
      </div>
      <h3 className="mb-2 font-primaryBold text-neutral-very-dark-violet text-xl">
        {title}
      </h3>
      <p className="text-sm text-neutral-grayish-violet leading-5">{text}</p>
    </article>
  );
};

StatisticsCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  margin: PropTypes.string,
  icon: PropTypes.string.isRequired,
};
