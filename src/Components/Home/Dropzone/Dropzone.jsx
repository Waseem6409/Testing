import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./Dropzone.module.scss";

function Dropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()}>
      <div className={styles.uploadContainer}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>
            Drag or <span>Browse</span> files to upload
          </p>
        )}
      </div>
    </div>
  );
}

export default Dropzone;
