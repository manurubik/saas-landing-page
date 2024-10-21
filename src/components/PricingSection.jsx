import { pricingPlans } from "../data/pricing";
import PlanCard from "./PlanCard";
import TagLine from "./TagLine";

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="flex text-center p-10 items-center justify-center flex-col"
    >
      <TagLine>Precios</TagLine>
      <h2 className="font-extrabold text-3xl mb-8 pt-3 text-black dark:text-white">
        Precios flexibles para adaptarse a su crecimiento
      </h2>
      <div className="grid mt-10 items-center grid-cols-1 gap-3 md:grid-cols-3 max-md:gap-10 max-w-screen-xl">
        {pricingPlans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
