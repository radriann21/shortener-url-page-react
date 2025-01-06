import { Icon } from "./Icon";
import { IconFacebook } from "./icons/IconFacebook.jsx";
import { IconTwitter } from "./icons/IconTwitter.jsx";
import { IconPinterest } from "./icons/IconPinterest.jsx";
import { IconInstagram } from "./icons/IconInstagram.jsx";

export const Footer = () => {
  const options = {
    features: ["Link Shortening", "Branded Links", "Analytics"],
    resources: ["Blog", "Developers", "Support"],
    company: ["About", "Our Team", "Careers", "Contact"],
  };

  return (
    <footer className="w-full place-items-center sm:place-items-start p-12 sm:p-20 bg-neutral-very-dark-violet font-primaryRegular text-white grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-0 sm:gap-y-0 sm:gap-x-10">
      <div>
        <Icon />
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-x-0 space-y-8 sm:space-y-0 sm:space-x-12 text-center">
        <div>
          <h4 className="font-primaryBold mb-4 text-center sm:text-left">
            Features
          </h4>
          <ul className="flex flex-col space-y-4 text-neutral-grayish-violet font-primaryRegular text-sm text-center sm:text-left">
            {options.features.map((feature, index) => (
              <li
                className="cursor-pointer transition-color duration-300 hover:text-neutral-custom-gray"
                key={index}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-primaryBold mb-4 text-center sm:text-left">
            Resources
          </h4>
          <ul className="flex flex-col space-y-4 text-neutral-grayish-violet font-primaryRegular text-sm text-center sm:text-left">
            {options.resources.map((resource, index) => (
              <li
                className="cursor-pointer transition-color duration-300 hover:text-neutral-custom-gray"
                key={index}
              >
                {resource}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-primaryBold mb-4 text-center sm:text-left">
            Company
          </h4>
          <ul className="flex flex-col space-y-4 text-neutral-grayish-violet font-primaryRegular text-sm text-center sm:text-left">
            {options.company.map((info, index) => (
              <li
                className="cursor-pointer transition-color duration-300 hover:text-neutral-custom-gray"
                key={index}
              >
                {info}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-start space-x-6">
        <IconFacebook />
        <IconTwitter />
        <IconPinterest />
        <IconInstagram />
      </div>
    </footer>
  );
};
