import { useState, useEffect } from "react";
import logoUrl from "../assets/logo.png";
import MobileMenu from "./MobileMenu";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !scrolled) {
      setScrolled(true);
    } else if (latest === 0 && scrolled) {
      setScrolled(false);
    }
  });

  const defaultClasses = "transition-all absolute inset-0 -z-1";
  let navBarClasses = scrolled
    ? `${defaultClasses} border-b border-gray-300 dark:border-gray-700 bg-white/75 dark:bg-gray-900/80 backdrop-blur-lg`
    : `${defaultClasses} bg-transparent`;

  return (
    <div className="sticky inset-x-0 top-0 w-full z-30">
      <div className={navBarClasses}></div>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative">
        <div className="flex items-center justify-between">
          <a href="/">
            <img src={logoUrl} alt="logo" className="h-20 w-20" />
          </a>
          <nav className="hidden md:block">
            <ul className="flex flex-row space-x-6">
              <li>
                <a href="/" className="text-gray-600 dark:text-gray-300">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-600 dark:text-gray-300"
                >
                  Características
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 dark:text-gray-300">
                  Precios
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden md:flex items-center space-x-3">
            <DarkModeSwitch
              checked={darkMode}
              onChange={setDarkMode}
              size={36}
            />
            <a className="bg-black px-3 py-2 rounded-md text-white cursor-pointer dark:bg-gray-800">
              Regístrate
            </a>
            <a className="bg-black px-3 py-2 rounded-md text-white cursor-pointer dark:bg-gray-800">
              Inicia sesión
            </a>
          </div>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
