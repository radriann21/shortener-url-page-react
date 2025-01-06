import { StatisticsCard } from "./StatisticsCard";
import { LinksContainer } from "./LinksContainer";
import iconRecognition from "../assets/images/icon-brand-recognition.svg";
import iconDetailed from "../assets/images/icon-detailed-records.svg";
import iconCustomizable from "../assets/images/icon-fully-customizable.svg";

export const Statistics = () => {
  return (
    <section className="bg-neutral-100 w-full p-10">
      <LinksContainer />
      <div className="mx-auto text-center mt-20">
        <h2 className="font-primaryBold text-2xl sm:text-4xl text-neutral-very-dark-violet">
          Advanced Statistics
        </h2>
        <p className="mt-4 text-neutral-grayish-violet w-full sm:w-[40%] mx-auto sm:text-lg">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="w-full sm:w-[80%] mt-20 sm:mt-36 sm:mb-20 flex flex-col sm:flex-row items-center justify-center space-x-0 space-y-20 sm:space-y-0 sm:space-x-12 mx-auto">
        <div className="hidden w-[80%] h-4 bg-primary-custom-cyan rounded-full absolute top-20"></div>
        <StatisticsCard
          title="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help install confidence in your content."
          icon={iconRecognition}
        />
        <StatisticsCard
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          margin="mt-20"
          icon={iconDetailed}
        />
        <StatisticsCard
          title="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          margin="mt-16"
          icon={iconCustomizable}
        />
      </div>
    </section>
  );
};
