import { Sun, Moon } from "lucide-react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center bg-black p-2 rounded-md text-white cursor-pointer dark:bg-pink-400 dark:text-black"
    >
      {!darkMode && <Sun className="mr-2" />}

      <span
        className={`transform transition-transform duration-200 ease-in-out block w-6 h-6 rounded-full ${
          darkMode ? "translate-x-2 bg-black" : "bg-white"
        }`}
      />
      {darkMode && <Moon className="ml-2" />}
    </button>
  );
};

export default DarkModeToggle;
