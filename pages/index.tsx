import type { NextPage } from "next";
import React from "react";
import Title from "@comp/pages/inicio/Title";
import styles from "@style/pages/inicio/inicio.module.css";
import DragAndDrop from "@comp/DragAndDrop/DragAndDrop";

const Index: NextPage = () => {
  return (
    <div className={styles.main_container}>
      <Title />
      <DragAndDrop />
    </div>
  );
};

export default Index;
