import React from "react";
import axios from "axios";
import { Dialog } from "@material-ui/core";
import "./index.css";

const UploadSection = () => {
  const filer = React.useRef(null);
  const [modal, setModal] = React.useState(false);
  const [feedback, setFeedback] = React.useState("uploading...");
  const [stagedFiles, setStagedFiles] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(filer.current);
    console.log(formData);
    axios.post("https://deqree.in/uploader", formData).then((response) => {
      // setModal(!modal);
      setFeedback(JSON.stringify(response));
      console.log(response);
    });
  };

  const handleChange = (e) => {
    let { files } = e.target;
    let stagedFileNames = [];
    for (let i = 0; i < files.length; i++) {
      // console.log(files[i].name);
      stagedFileNames.push(files[i].name);
    }
    // console.log(stagedFileNames);
    setStagedFiles(stagedFileNames);
    // console.log(stagedFiles);
  };

  return (
    <div className="upload-section">
      <span className="upload-title">File Upload</span>
      <form
        id="upload-form"
        ref={filer}
        encType="multipart/form-data"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="upload-field" className=" upload-label button">
          {/* <i className="fas fa-cloud-upload-alt"></i>

          <span style={{ fontSize: "2vw", marginTop: "20px", color: "grey" }}>
            drag files here
          </span> */}
          <input
            type="file"
            id="upload-field"
            name="files[]"
            multiple
            required
            onChange={(e) => {
              handleChange(e);
            }}
            // size="100"
          />
        </label>
        <span className="staged-files">
          {stagedFiles.map((filename, ndx) => (
            <span key={ndx}>{filename}</span>
          ))}
        </span>
        <button
          type="submit"
          className="button button-primary sub-btn"
          onClick={() => {
            setModal(!modal);
            setStagedFiles([]);
          }}
        >
          Send files
        </button>
      </form>
      <Dialog
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={modal}
        onClose={() => {
          setModal(!modal);
          setFeedback("uploading...");
        }}
      >
        <span
          style={{
            padding: "16px",
            backgroundColor: "#1c2027",
            color: "white",
            borderRadius: "0px",
            wordWrap: "break-word",
          }}
        >
          {feedback}
        </span>
      </Dialog>
    </div>
  );
};

export default UploadSection;
