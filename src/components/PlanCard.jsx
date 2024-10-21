import { Check } from "lucide-react";

const PlanCard = ({ price, title, description, features, isPopular }) => {
  return (
    <div className="border flex flex-col justify-center bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg rounded-lg h-full p-6 hover:shadow-md text-left relative">
      {isPopular && (
        <div className="absolute -top-7 left-0 bg-indigo-500 text-white px-2 py-1 rounded-t-lg w-full text-center">
          Popular
        </div>
      )}
      <div className="flex flex-col justify-between h-full">
        <div className="inline-flex items-end">
          <h1 className="font-extrabold text-3xl text-black dark:text-white">
            {price}
          </h1>
          <span className="ml-3 text-gray-500 dark:text-gray-400 align-bottom">
            €/mes
          </span>
        </div>
        <div>
          <h2 className="font-bold text-xl my-2 text-black dark:text-white">
            {title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
          <div className="border-t border-gray-400 dark:border-gray-600 opacity-25 my-3 flex-grow"></div>
          <ul>
            {features.map((feature, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-row items-center text-gray-700 dark:text-gray-300 gap-2 my-2"
                >
                  <div className="w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center">
                    <Check className="inline-block text-white w-3 h-3" />
                  </div>
                  <p>{feature}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button className="bg-indigo-500 hover:bg-indigo-400 py-2 mt-3 rounded-lg text-white w-full dark:bg-indigo-600 dark:hover:bg-indigo-500">
            Seleccionar plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
