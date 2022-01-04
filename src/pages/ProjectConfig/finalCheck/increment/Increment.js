import { Icon } from "@iconify/react";
import styles from "./styles.module.css";
import useScheduleFinalCheck from "../useScheduleFinalCheck";

export const Increment = () => {
  const { increase, nrVehicles } = useScheduleFinalCheck();

  return (
    <div className={styles.buttonsContainer}>
      <button
        type='button'
        className={styles.buttonMinus}
        onClick={() => increase(-1)}
      >
        <Icon icon='akar-icons:minus' color='rgba(238, 170, 85, 0.6)' />
      </button>
      <div className={styles.countLabel}>{nrVehicles}</div>
      <button
        type='button'
        className={styles.buttonAdd}
        onClick={() => increase(1)}
      >
        <Icon icon='akar-icons:plus' color='rgba(238, 170, 85, 0.6)' />
      </button>
    </div>
  );
};
