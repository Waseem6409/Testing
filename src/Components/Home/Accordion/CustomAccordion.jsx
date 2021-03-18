import React, { useState } from "react";
import styles from "./CustomAccordion.module.scss";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ReactComponent as Upload } from "../../../Assets/Home/Upload.svg";
import { ReactComponent as Figma } from "../../../Assets/Home/Figma.svg";
import { ReactComponent as Cross } from "../../../Assets/Home/Cross.svg";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CustomInput from "../Input/CustomInput";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import CustomModal from "../Modal/CustomModal";

function CustomAccordion() {
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
                <CustomDropdown />
              </Grid>
              <Grid item xs={12} md={4}>
                <CustomInput />
              </Grid>
            </Grid>
          </div>
          <div className={styles.gridContainer}>
            <Grid container spacing={4} alignItems="flex-end">
              <Grid item xs={12} md={4}>
                <CustomDropdown />
              </Grid>
              <Grid item xs={12} md={4}>
                <CustomInput />
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
      <CustomModal open={open} handleClose={handleClose} />
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
                        style={{
                          width: "40px",
                          height: "40px",
                          cursor: "pointer",
                        }}
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
                        style={{
                          width: "40px",
                          height: "40px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className={styles.uploadOnceContainer}>
                <Button className={styles.uploadOnce} onClick={handleOpen}>
                  Upload Once
                </Button>
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CustomAccordion;
