import demoUrl from "../assets/demo.png";
import Tag from "./Tag";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section text-center mt-32 flex flex-col">
      <Tag>
        <div className="flex items-center cursor-pointer">
          <span>Nexx v0.1</span>
          <ChevronRight className="w-6 h-6 ml-1 text-indigo-300 overflow-visible" />
        </div>
      </Tag>
      <h1 className="text-4xl font-extrabold leading-[1.15] text-black dark:text-white sm:text-6xl">
        Inicie su SaaS
        <br />
        <span className="bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
          en minutos, no en días
        </span>
      </h1>
      <h2 className="mt-5 text-gray-600 dark:text-gray-400 sm:text-xl">
        Nexx es una herramienta de código abierto para desarrolladores que
        desean lanzar sus ideas más rápido.
      </h2>
      <div className="mx-auto mt-5 flex max-w-fit space-x-4">
        <a
          href=""
          className="rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:ring-gray-400 dark:hover:ring-gray-600 hover:ring-2"
        >
          Comenzar
        </a>
        <a
          href=""
          className="rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white hover:ring-gray-300 dark:hover:ring-gray-600 hover:ring-2"
        >
          Saber más
        </a>
      </div>
      <div className="mt-5 items-center justify-center">
        <img
          src={demoUrl}
          alt="Demo"
          className="mx-auto max-h-[300px] sm:max-h-[500px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
