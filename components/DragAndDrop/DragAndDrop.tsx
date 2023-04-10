import { Data, Status } from "@type/components/ContainerCards.types";
import ContainerCards from "@comp/ContainerCards/ContainerCards";
import styles from "./dragAndDrop.module.css";
import { data } from "data/heroes";
import { useState } from "react";
import { useDragAndDrop } from "hooks/useDragAndDrop";

const typesHero: Status[] = ["good", "normal", "bad"];
const DragAndDrop = () => {
  const { isDragging, listHeroes, handleDragging, handleUpdateHeroes } =
    useDragAndDrop(data);

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
