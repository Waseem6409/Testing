import React from "react";
import styles from "./Header.module.scss";
import { Container } from "@material-ui/core";
import { ReactComponent as Search } from "../../../Assets/Header/Search.svg";
import { ReactComponent as Message } from "../../../Assets/Header/Message.svg";
import { ReactComponent as Bell } from "../../../Assets/Header/Bell.svg";
import { ReactComponent as Profile } from "../../../Assets/Header/Profile.svg";

function Header() {
  return (
    <Container>
      <div className={styles.mainContainer}>
        <div className={styles.searchContainer}>
          <div className={styles.iconContainer}>
            <Search width="100%" height="100%" className={styles.icon} />
          </div>
          <div className={styles.inputContainer}>
            <input type="text" className={styles.input} />
          </div>
        </div>
        <div className={styles.profileContainer}>
          <div className={styles.messageContainer}>
            <Message width="100%" height="100%" className={styles.message} />
          </div>
          <div className={styles.notificationContainer}>
            <Bell width="100%" height="100%" className={styles.bell} />
          </div>
          <div className={styles.profilePictureContainer}>
            <Profile width="100%" height="100%" className={styles.profile} />
          </div>
          <div className={styles.profileNameContainer}>
            <p>Andrew</p>
            <p>Admin account</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Header;
