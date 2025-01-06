import { useRef } from "react";
import { Menu } from "lucide-react";
import logo from "../assets/images/logo.svg";

export const Header = () => {
  const menuRef = useRef(null);

  const menu = [
    { name: "Features" },
    { name: "Pricing" },
    { name: "Resources" },
  ];

  const handleMenu = () => {
    if (menuRef.current.classList.contains("-translate-y-full")) {
      menuRef.current.classList.replace("-translate-y-full", "translate-y-20");
    } else {
      menuRef.current.classList.replace("translate-y-20", "-translate-y-full");
    }
  };

  return (
    <header className="w-full flex items-center justify-between sm:justify-normal space-x-8">
      <img src={logo} alt="logo of shortly" />
      <div
        ref={menuRef}
        className="absolute sm:relative top-0 inset-x-0 flex flex-col sm:flex-row items-center justify-between w-[280px] sm:w-full bg-primary-dark-violet rounded-lg sm:rounded-none p-8 sm:p-0 sm:bg-transparent -translate-y-full sm:translate-y-0 transition-transform duration-300"
      >
        <ul className="list-none flex flex-col sm:flex-row items-center sm:space-x-8 font-bold text-white sm:text-neutral-grayish-violet space-y-4 sm:space-y-0">
          {menu.map((item, index) => (
            <li
              className="cursor-pointer transition-colors duration-300 hover:text-neutral-very-dark-violet"
              key={index}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <span className="flex items-center sm:hidden my-4">
          <span className="h-px bg-neutral-950"></span>
        </span>

        <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 font-bold">
          <button className="text-white sm:text-neutral-grayish-violet cursor-pointer transition-colors duration-300 hover:text-neutral-very-dark-violet">
            Login
          </button>
          <button className="w-full py-2 px-6 text-white bg-primary-custom-cyan rounded-full transition-colors duration-300 hover:bg-opacity-60">
            Sign Up
          </button>
        </div>
      </div>
      <Menu onClick={handleMenu} className="sm:hidden" />
    </header>
  );
};
