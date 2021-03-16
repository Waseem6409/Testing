import React, { useState } from "react";
import Header from "../../Components/Shared/Header/Header";
import SideNav from "../../Components/Shared/SideNav/SideNav";
import styles from "./Home.module.scss";
import "./Home.css";
import {
  Container,
  Button,
  makeStyles,
  Select,
  MenuItem,
} from "@material-ui/core";
import { ReactComponent as File } from "../../Assets/Home/File.svg";
import { ReactComponent as Upload } from "../../Assets/Home/Upload.svg";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ReactComponent as Figma } from "../../Assets/Home/Figma.svg";
import { ReactComponent as Cross } from "../../Assets/Home/Cross.svg";

function Home() {
  const [sideNav, setSideNav] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          <div className={styles.accordionContainer}>
            <Accordion
              className={styles.accordion}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1bh-content"
                expandIcon={<ExpandMoreIcon className={styles.icon} />}
              >
                <div className={styles.headingContainer}>
                  <p className={styles.heading}>Accord 1</p>
                </div>
              </AccordionSummary>
              <AccordionDetails
                className={styles.contentContainer}
                style={{ flexDirection: "column" }}
              >
                <div className={styles.addFormContainer}>
                  <Button className={styles.addForm}>Add Form</Button>
                </div>
                <div className={styles.gridContainer}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
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
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                    </Grid>
                  </Grid>
                </div>
                <div className={styles.gridContainer}>
                  <Grid container spacing={4} alignItems="flex-end">
                    <Grid item xs={12} md={4}>
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
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <div className={styles.testContainer}>
                        <Button className={styles.test}>Test Connection</Button>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </AccordionDetails>
            </Accordion>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              className={styles.modalContainer}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={styles.modal}>
                  <Grid item xs={12} md={12}>
                    <div className={styles.fileContainer}>
                      <div className={styles.fileBox}>
                        <div className={styles.fileBoxLeft}>
                          <div className={styles.iconContainer}>
                            <Figma
                              width="100%"
                              height="100%"
                              className={styles.icon}
                            />
                          </div>
                          <div className={styles.file}>
                            <div className={styles.fileName}>
                              <p>New Design.fig</p>
                            </div>
                            <div className={styles.fileSize}>
                              <p>126 mb</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.fileBoxRight}>
                          <div className={styles.progressContainer}>
                            <div className={styles.progressBar}>
                              <div className={styles.barComplete}></div>
                            </div>
                            <div className={styles.statusContainer}>
                              <div className={styles.speedContainer}>
                                <p>95 kb/s</p>
                              </div>
                              <div className={styles.status}>
                                <p>Completed</p>
                              </div>
                            </div>
                          </div>
                          <div className={styles.iconContainer}>
                            <Cross
                              width="100%"
                              height="100%"
                              className={styles.icon}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div className={styles.fileContainer}>
                      <div className={styles.fileBox}>
                        <div className={styles.fileBoxLeft}>
                          <div className={styles.iconContainer}>
                            <Figma
                              width="100%"
                              height="100%"
                              className={styles.icon}
                            />
                          </div>
                          <div className={styles.file}>
                            <div className={styles.fileName}>
                              <p>New Design.fig</p>
                            </div>
                            <div className={styles.fileSize}>
                              <p>126 mb</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.fileBoxRight}>
                          <div className={styles.progressContainer}>
                            <div className={styles.progressBar}>
                              <div className={styles.barComplete}></div>
                            </div>
                            <div className={styles.statusContainer}>
                              <div className={styles.speedContainer}>
                                <p>95 kb/s</p>
                              </div>
                              <div className={styles.status}>
                                <p>Completed</p>
                              </div>
                            </div>
                          </div>
                          <div className={styles.iconContainer}>
                            <Cross
                              width="100%"
                              height="100%"
                              className={styles.icon}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div className={styles.fileContainer}>
                      <div className={styles.fileBox}>
                        <div className={styles.fileBoxLeft}>
                          <div className={styles.iconContainer}>
                            <Figma
                              width="100%"
                              height="100%"
                              className={styles.icon}
                            />
                          </div>
                          <div className={styles.file}>
                            <div className={styles.fileName}>
                              <p>New Design.fig</p>
                            </div>
                            <div className={styles.fileSize}>
                              <p>126 mb</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.fileBoxRight}>
                          <div className={styles.progressContainer}>
                            <div className={styles.progressBar}>
                              <div className={styles.barComplete}></div>
                            </div>
                            <div className={styles.statusContainer}>
                              <div className={styles.speedContainer}>
                                <p>95 kb/s</p>
                              </div>
                              <div className={styles.status}>
                                <p>Completed</p>
                              </div>
                            </div>
                          </div>
                          <div className={styles.iconContainer}>
                            <Cross
                              width="100%"
                              height="100%"
                              className={styles.icon}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid sm={12} md={12}>
                    <div className={styles.uploadContainer}>
                      <p>
                        Drag or <span>Browse</span> files to upload
                      </p>
                    </div>
                  </Grid>
                  <div className={styles.buttonsContainer}>
                    <Button className={styles.submit}>Submit</Button>
                    <Button className={styles.cancel} onClick={handleClose}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </Fade>
            </Modal>
            <Accordion
              className={styles.accordion}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2bh-content"
                expandIcon={<ExpandMoreIcon className={styles.icon} />}
              >
                <div className={styles.headingContainer}>
                  <p className={styles.heading}>Accord 2</p>
                </div>
              </AccordionSummary>
              <AccordionDetails className={styles.contentContainer}>
                <Grid
                  container
                  spacing={4}
                  alignItems="flex-end"
                  className={styles.content}
                >
                  <Grid item xs={12} md={6}>
                    <div className={styles.fileContainer}>
                      <div className={styles.fileNameStatusContainer}>
                        <div className={styles.fileName}>
                          <p>File 1</p>
                        </div>
                        <div className={styles.fileStatus}>
                          <p className={styles.success}>Successful</p>
                        </div>
                      </div>
                      <div className={styles.fileBox}>
                        <div className={styles.fileBoxLeft}>
                          <div className={styles.iconContainer}>
                            <Figma
                              width="100%"
                              height="100%"
                              className={styles.icon}
                            />
                          </div>
                          <div className={styles.file}>
                            <div className={styles.fileName}>
                              <p>New Design.fig</p>
                            </div>
                            <div className={styles.fileSize}>
                              <p>126 mb</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.fileBoxRight}>
                          <div className={styles.iconContainer}>
                            <Cross
                              width="100%"
                              height="100%"
                              className={styles.icon}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className={styles.fileContainer}>
                      <div className={styles.fileNameStatusContainer}>
                        <div className={styles.fileName}>
                          <p>File 1</p>
                        </div>
                        <div className={styles.fileStatus}>
                          <p className={styles.error}>Error</p>
                        </div>
                      </div>
                      <div className={styles.fileBoxError}>
                        <div className={styles.fileBoxLeft}>
                          <div className={styles.iconContainer}>
                            <Figma
                              width="100%"
                              height="100%"
                              className={styles.icon}
                            />
                          </div>
                          <div className={styles.file}>
                            <div className={styles.fileName}>
                              <p>New Design.fig</p>
                            </div>
                            <div className={styles.fileSize}>
                              <p>126 mb</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.fileBoxRight}>
                          <div className={styles.iconContainer}>
                            <Cross
                              width="100%"
                              height="100%"
                              className={styles.icon}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className={styles.fileContainer}>
                      <div className={styles.fileNameStatusContainer}>
                        <div className={styles.fileName}>
                          <p>File 1</p>
                        </div>
                        <div className={styles.fileStatus}>
                          <p className={styles.success}>Successful</p>
                        </div>
                      </div>
                      <div className={styles.fileBox}>
                        <div className={styles.fileBoxLeft}>
                          <div className={styles.iconContainer}>
                            <Figma
                              width="100%"
                              height="100%"
                              className={styles.icon}
                            />
                          </div>
                          <div className={styles.file}>
                            <div className={styles.fileName}>
                              <p>New Design.fig</p>
                            </div>
                            <div className={styles.fileSize}>
                              <p>126 mb</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.fileBoxRight}>
                          <div className={styles.iconContainer}>
                            <Cross
                              width="100%"
                              height="100%"
                              className={styles.icon}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className={styles.fileContainer}>
                      <div className={styles.fileNameStatusContainer}>
                        <div className={styles.fileName}>
                          <p>File 1</p>
                        </div>
                        <div
                          className={styles.fileStatus}
                          style={{ display: "none" }}
                        >
                          <p className={styles.success}>Successful</p>
                        </div>
                      </div>
                      <div className={styles.fileBox}>
                        <div className={styles.fileBoxLeft}>
                          <p
                            style={{
                              fontFamily: "Lato",
                              fontWeight: "600",
                              fontSize: "15px",
                              color: "#aeaeae",
                            }}
                          >
                            Select a file to upload
                          </p>
                        </div>
                        <div className={styles.fileBoxRight}>
                          <div style={{ width: "40px", height: "40px" }}>
                            <Upload
                              width="100%"
                              height="100%"
                              style={{ width: "40px", height: "40px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <div className={styles.fileContainer}>
                      <div className={styles.fileNameStatusContainer}>
                        <div className={styles.fileName}>
                          <p>File 1</p>
                        </div>
                        <div
                          className={styles.fileStatus}
                          style={{ display: "none" }}
                        >
                          <p className={styles.success}>Successful</p>
                        </div>
                      </div>
                      <div className={styles.fileBox}>
                        <div className={styles.fileBoxLeft}>
                          <p
                            style={{
                              fontFamily: "Lato",
                              fontWeight: "600",
                              fontSize: "15px",
                              color: "#aeaeae",
                            }}
                          >
                            Select a file to upload
                          </p>
                        </div>
                        <div className={styles.fileBoxRight}>
                          <div style={{ width: "40px", height: "40px" }}>
                            <Upload
                              width="100%"
                              height="100%"
                              style={{ width: "40px", height: "40px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <div className={styles.uploadOnceContainer}>
                      <Button
                        className={styles.uploadOnce}
                        onClick={handleOpen}
                      >
                        Upload Once
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </div>
          <Grid container>
            <Grid item md={4} sm={6} xs={6}>
              <div className={styles.connectFinalContainer}>
                <Button className={styles.connectFinal}>Connect</Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Home;
