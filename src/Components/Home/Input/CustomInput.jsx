import React from "react";
import styles from "./CustomInput.module.scss";
import { TextField } from "@material-ui/core";

function CustomInput() {
  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectHeading}>
        <p>Connection</p>
      </div>
      <TextField className={styles.select} />
    </div>
  );
}

export default CustomInput;
