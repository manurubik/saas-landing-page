import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { title: "Sobre nosotros", url: "/" },
  { title: "Características", url: "/" },
  { title: "Precios", url: "/" },
  { title: "Regístrate", url: "/" },
  { title: "Inicia sesión", url: "/" },
];

const MobileMenu = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="block md:hidden">
      {!navOpen ? (
        <button onClick={() => setNavOpen(true)}>
          <Menu size={32} className="text-black dark:text-white" />
        </button>
      ) : (
        <>
          <button onClick={() => setNavOpen(false)}>
            <X size={32} className="text-black dark:text-white" />
          </button>
          <div className="absolute left-0 w-full top-20 bg-white/60 dark:bg-gray-900/80 backdrop-blur-lg border-b border-t border-gray-300 dark:border-gray-700">
            <ul className="flex flex-col py-4 items-center">
              {navItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.url}
                      className="block text-gray-600 dark:text-gray-300 p-4"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
