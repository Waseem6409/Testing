import React, { useState } from "react";
import Header from "../../Components/Shared/Header/Header";
import SideNav from "../../Components/Shared/SideNav/SideNav";
import styles from "./Home.module.scss";
import "./Home.css";
import { Container, Button } from "@material-ui/core";
import { ReactComponent as File } from "../../Assets/Home/File.svg";
import MenuIcon from "@material-ui/icons/Menu";
import CustomAccordion from "../../Components/Home/Accordion/CustomAccordion";
import Grid from "@material-ui/core/Grid";

function Home() {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.sideNavContainer}>
        <SideNav sideNav={sideNav} setSideNav={setSideNav} />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.toggleContainer}>
          <Button onClick={() => setSideNav(true)}>
            <MenuIcon />
          </Button>
        </div>
        <Header />
        <Container>
          <div className={styles.topContainer}>
            <div className={styles.headingContainer}>
              <h1>Weekly sumup</h1>
              <p>Get summary of your weekly online transactions here.</p>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progressHeading}>
                <p>Progress</p>
              </div>
              <div className={styles.progressBarContainer}>
                <div className={styles.iconContainer}>
                  <File width="100%" height="100%" className={styles.icon} />
                </div>
                <div className={styles.progress}>
                  <div className={styles.progressBar}>
                    <div className={styles.bar}>
                      <div className={styles.barComplete}></div>
                    </div>
                    <div className={styles.progressPercentage}>
                      <p>52%</p>
                    </div>
                  </div>
                  <div className={styles.fileNameContainer}>
                    <p>Project Files</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CustomAccordion />
          <Grid container>
            <Grid item md={4} sm={6} xs={6}>
              <div className={styles.connectFinalContainer}>
                <Button
                  color="primary"
                  variant="contained"
                  className={styles.connectFinal}
                >
                  Connect
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Home;
