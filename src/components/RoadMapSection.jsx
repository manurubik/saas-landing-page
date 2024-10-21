import MileStone from "./MileStone";
import TagLine from "./TagLine";
import { roadmap } from "../data/roadmap";

const RoadMapSection = () => {
  return (
    <section className="max-w-80 mx-auto flex flex-col items-center justify-center py-10">
      <TagLine>Hoja de Ruta</TagLine>
      <div className="pt-10">
        {roadmap.map((roadmapItem, index) => {
          return (
            <MileStone
              key={index}
              title={roadmapItem.name}
              description={roadmapItem.description}
              lastItem={index === roadmap.length - 1}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RoadMapSection;
