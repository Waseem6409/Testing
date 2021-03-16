import React, { useState } from "react";
import styles from "./SideNav.module.scss";
import Logo from "../../../Assets/SideNav/Logo.svg";
import LogoSmall from "../../../Assets/SideNav/LogoSmall.svg";
import { ReactComponent as Overview } from "../../../Assets/SideNav/Overview.svg";
import { ReactComponent as Transactions } from "../../../Assets/SideNav/Transactions.svg";
import { ReactComponent as Cards } from "../../../Assets/SideNav/Cards.svg";
import { ReactComponent as Goals } from "../../../Assets/SideNav/Goals.svg";
import { ReactComponent as Invoices } from "../../../Assets/SideNav/Invoices.svg";
import { ReactComponent as Upgrade } from "../../../Assets/SideNav/Upgrade.svg";
import { ReactComponent as Settings } from "../../../Assets/SideNav/Settings.svg";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

function SideNav({ sideNav, setSideNav }) {
  return (
    <>
      {sideNav ? (
        <div
          onClick={() => setSideNav(false)}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: 11,
          }}
        ></div>
      ) : null}

      <div
        className={`${styles.mainContainer} ${
          sideNav ? styles.showSideNav : ""
        }`}
      >
        <div className={styles.logoContainer}>
          <img
            width="100%"
            height="100%"
            src={Logo}
            alt="logo"
            className={styles.logo}
          />
          <img
            width="100%"
            height="100%"
            src={LogoSmall}
            alt="logosmall"
            className={styles.logo}
          />
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.selectedLink}>
            <div className={styles.iconContainer}>
              <Overview className={styles.icon} width="100%" height="100%" />
            </div>
            <div className={styles.nameContainer}>
              <p className={styles.name}>Overview</p>
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.iconContainer}>
              <Transactions
                className={styles.icon}
                width="100%"
                height="100%"
              />
            </div>
            <div className={styles.nameContainer}>
              <p className={styles.name}>Transactions</p>
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.iconContainer}>
              <Cards className={styles.icon} width="100%" height="100%" />
            </div>
            <div className={styles.nameContainer}>
              <p className={styles.name}>Cards</p>
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.iconContainer}>
              <Goals className={styles.icon} width="100%" height="100%" />
            </div>
            <div className={styles.nameContainer}>
              <p className={styles.name}>Goals</p>
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.iconContainer}>
              <Invoices className={styles.icon} width="100%" height="100%" />
            </div>
            <div className={styles.nameContainer}>
              <p className={styles.name}>Invoices</p>
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.iconContainer}>
              <Settings className={styles.icon} width="100%" height="100%" />
            </div>
            <div className={styles.nameContainer}>
              <p className={styles.name}>Settings</p>
            </div>
          </div>
          <div className={styles.upgrade}>
            <div className={styles.nameContainer}>
              <p className={styles.name}>Upgrade to premium</p>
            </div>
            <div className={styles.iconContainer}>
              <ArrowUpwardIcon className={styles.icon} />
              <Upgrade className={styles.icon2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
