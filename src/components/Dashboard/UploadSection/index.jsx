import React from "react";
import axios from "axios";
import { useMediaQuery } from "@material-ui/core";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import "./index.css";

const veriStyles = makeStyles({
  paper: {
    // width: "20vw",
    // height: "20vh",
    background: "transparent",
    border: "none",
    boxShadow: "none",
    // padding: "20px",
  },
});

const spinnerStyle = makeStyles({
  colorPrimary: {
    color: "#0270D7",
  },
});

const UploadSection = () => {
  const veriClasses = veriStyles();
  const spinnerClasses = spinnerStyle();
  const filer = React.useRef(null);
  const [modal, setModal] = React.useState(false);
  const [feedback, setFeedback] = React.useState("uploading...");
  const [status, setStatus] = React.useState("info");
  const [stagedFiles, setStagedFiles] = React.useState([]);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(filer.current);
    console.log(formData);
    axios.post("https://deqree.in/api/uploader", formData).then((response) => {
      // setModal(!modal);
      if (response.data.Executed) {
        const text = `
          Your Files have been uploaded successfully.
        `;
        setStatus("success");
        setFeedback(text);
      } else {
        setStatus("error");
        setFeedback(response.data);
      }
      // setFeedback(JSON.stringify(response));
      // console.log(response);
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
    <div
      className="upload-section"
      style={{ width: isMobile && "100%", borderRadius: isMobile && 0 }}
    >
      <span
        className="upload-title"
        style={{
          fontSize: isMobile && "23px",
        }}
      >
        Upload Certificates
      </span>
      <span
        className="desc-dash"
        style={{
          fontSize: isMobile && "20px",
        }}
      >
        You can stamp upto 200 certificates at a time.
      </span>
      <form
        id="upload-form"
        ref={filer}
        encType="multipart/form-data"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="upload-field" className=" upload-label button">
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
            <span style={{ padding: "10px" }} key={ndx}>
              {filename}
            </span>
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
        open={modal}
        classes={{ paper: veriClasses.paper }}
        onClose={() => {
          setModal(!modal);
          setFeedback("uploading...");
          setStatus("info");
        }}
      >
        {feedback === "uploading..." ? (
          <CircularProgress
            size={70}
            classes={{ colorPrimary: spinnerClasses.colorPrimary }}
          />
        ) : (
          <Alert
            style={{ wordWrap: "break-word", width: "100%", height: "100%" }}
            severity={status}
          >
            {feedback}
          </Alert>
        )}
      </Dialog>
    </div>
  );
};

export default UploadSection;
