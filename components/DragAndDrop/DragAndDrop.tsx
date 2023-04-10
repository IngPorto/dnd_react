import { Data, Status } from "@type/components/ContainerCards.types";
import ContainerCards from "@comp/ContainerCards/ContainerCards";
import styles from "./dragAndDrop.module.css";
import { data } from "data/heroes";
import { useState } from "react";

const typesHero: Status[] = ["good", "normal", "bad"];
const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [listHeroes, setListHeroes] = useState<Data[]>(data);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  const handleUpdateHeroes = (id: number, status: Status) => {
    setListHeroes((prevListHerores) => {
      const newListHeroes = prevListHerores.map((hero) =>
        id === hero.id ? { ...hero, status } : hero
      );
      return newListHeroes;
    });
  };

  return (
    <div>
      <div className={styles.isDragging}>
        <p>Is Dragging : {isDragging ? "✅" : "❌"}</p>
      </div>
      <div className={styles.grid}>
        {typesHero.map((container) => (
          <ContainerCards
            status={container}
            key={container}
            items={listHeroes}
            isDragging={isDragging}
            handleDragging={handleDragging}
            handleUpdateHeroes={handleUpdateHeroes}
          />
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
