import { Data } from "@type/components/ContainerCards.types";
import styles from "./carditem.module.css";

type Props = {
  data: Data;
  handleDragging: (dragging: boolean) => void;
};

const CardItem = ({ data, handleDragging }: Props) => {

  const handleDragEnd = () => handleDragging(false);

  const handleDragStart = (event:React.DragEvent<HTMLDivElement>) =>{
    // setData permite guardar a través de una key un dato dentro del elementos arrastrable
    event.dataTransfer.setData('text', `${data.id}`)
    handleDragging(true);
  }

  return (
    <div className={styles.card_container} draggable onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <p>{data.content}</p>
    </div>
  );
};

export default CardItem;
