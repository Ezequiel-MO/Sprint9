import { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./styles.module.css";

export const Increment = () => {
  const [counter, setCounter] = useState(0);
  const increaseBy = (value) => {
    setCounter((prev) => Math.max(0, prev + value));
  };

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        <Icon icon='akar-icons:minus' color='rgba(238, 170, 85, 0.6)' />
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <div className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        <Icon icon='akar-icons:plus' color='rgba(238, 170, 85, 0.6)' />
      </div>
    </div>
  );
};
