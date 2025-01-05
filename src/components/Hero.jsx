import illustration from "../assets/images/illustration-working.svg";

export const Hero = () => {
  return (
    <section className="mt-16 sm:mt-24 flex flex-col-reverse sm:flex-row items-center justify-between">
      <div className="mt-8 sm:mt-0">
        <h1 className="font-primaryBold text-4xl sm:text-7xl text-neutral-very-dark-blue text-center sm:text-left">
          More than just shorter links
        </h1>
        <p className="mt-2 text-neutral-grayish-violet w-[80%] sm:w-[70%] text-center sm:text-lg sm:text-left mx-auto sm:mx-0">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <button className="mt-8 py-3 px-10 bg-primary-custom-cyan rounded-full font-bold text-white transition-colors duration-300 hover:bg-opacity-60 translate-x-[50%] sm:translate-x-0 sm:mx-0">
          Get Started
        </button>
      </div>
      <div>
        <img className="w-full" src={illustration} alt="illustration" />
      </div>
    </section>
  );
};
