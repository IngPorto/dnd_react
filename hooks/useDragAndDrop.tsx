import { Data, Status } from "@type/components/ContainerCards.types";
import { useState } from "react";

export const useDragAndDrop = (initialState: Data[]) => {
  const [isDragging, setIsDragging] = useState(false);
  const [listHeroes, setListHeroes] = useState<Data[]>(initialState);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  const handleUpdateHeroes = (id: number, status: Status) => {
    setListHeroes((prevListHerores) => {
      const newListHeroes = prevListHerores.map((hero) =>
        id === hero.id ? { ...hero, status } : hero
      );
      return newListHeroes;
    });
  };

  return {
    isDragging,
    listHeroes,
    handleDragging,
    handleUpdateHeroes,
  };
};
