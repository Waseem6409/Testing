import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import { ReactComponent as Upload } from "../../../Assets/Home/Upload.svg";
import { ReactComponent as Figma } from "../../../Assets/Home/Figma.svg";
import { ReactComponent as Cross } from "../../../Assets/Home/Cross.svg";
import styles from "./CustomModal.module.scss";
import Grid from "@material-ui/core/Grid";

function CustomModal({ handleClose, open }) {
  return (
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
                    <Figma width="100%" height="100%" className={styles.icon} />
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
                    <Cross width="100%" height="100%" className={styles.icon} />
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
                    <Figma width="100%" height="100%" className={styles.icon} />
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
                    <Cross width="100%" height="100%" className={styles.icon} />
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
                    <Figma width="100%" height="100%" className={styles.icon} />
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
                    <Cross width="100%" height="100%" className={styles.icon} />
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
  );
}

export default CustomModal;
