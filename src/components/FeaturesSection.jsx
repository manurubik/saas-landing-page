import { features } from "../data/features";
import TagLine from "./TagLine";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="flex items-center p-10 justify-center flex-col"
    >
      <TagLine>Características</TagLine>
      <h2 className="font-extrabold text-3xl mb-4 md:mb-8 text-center pt-3 text-gray-900 dark:text-gray-100">
        Creación de formularios inteligentes
      </h2>
      <div className="mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border rounded-lg bg-white/20 backdrop-blur-lg p-6 dark:bg-gray-800/20 shadow-lg h-full flex space-x-4"
          >
            <div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
