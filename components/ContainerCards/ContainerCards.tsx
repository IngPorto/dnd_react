import { Data, Status } from "@type/components/ContainerCards.types";
import styles from "./containerCards.module.css";
import CardItem from "@comp/CardItem/CardItem";

interface Props {
  status: Status;
  items: Data[];
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  handleUpdateHeroes: (id: number, status: Status) => void;
}

const ContainerCards = ({
  status,
  items = [],
  isDragging,
  handleDragging,
  handleUpdateHeroes,
}: Props) => {

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    // se obtiene el valor del elemento arrastable por medio de la key
    // se usa el "+" para volverlo number
    const id = +event.dataTransfer.getData('text');
    handleUpdateHeroes(id, status);
    handleDragging(false);
  }

  return (
    <div
      className={`${styles.layout_cards} ${
        isDragging && styles.layout_dragging
      }`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p>{status} hero</p>

      {items.map((hero) => {
        if (hero.status === status) {
          return (
            <CardItem
              data={hero}
              key={hero.id}
              handleDragging={handleDragging}
            />
          );
        }
      })}
    </div>
  );
};

export default ContainerCards;
