import React from "react";
import styles from "./CustomDropdown.module.scss";
import { Select, MenuItem } from "@material-ui/core";

function CustomDropdown() {
  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectHeading}>
        <p>Dropdown</p>
      </div>
      <Select className={styles.select}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>
  );
}

export default CustomDropdown;
