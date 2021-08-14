import { useMediaQuery } from "@material-ui/core";
import "./index.css";

const Contact = () => {
  const isPhone = useMediaQuery("(max-width: 640px)");
  return (
    <div className="contact-wrapper">
      <div className="text">
        <div className="detail-head">
          <span className="contact-title">Get a quote</span>
          <span className="detail">
            Fill up the form and our team will get back to you within 24 hours.
          </span>
        </div>
        <div className="contacts">
          <div className="number">
            <span>
              <i className="fa fa-phone" aria-hidden="true" />
            </span>
            +91 9384758295
          </div>
          <div className="email">
            <span>
              <i className="fas fa-envelope" />
            </span>
            example@deqree.in
          </div>
          <div className="address">
            <span>
              <i className="fa fa-map-marker" aria-hidden="true" />
            </span>
            something
          </div>
        </div>
        {!isPhone && (
          <span className="handles">
            <i className="fab h fa-facebook-f" />
            <i
              className="fab h fa-twitter"
              onClick={() => {
                window.location.href = "https://twitter.com/deqree";
              }}
            />
            <i className="fab h fa-instagram" />
          </span>
        )}
      </div>
      <form
        action="https://formspree.io/f/mvodvzgj"
        method="post"
        id="contactus"
      >
        {/* <TextField className="button" variant="outlined" label="Your Name" />
        <TextField variant="outlined" label="Email" />
        <TextField variant="outlined" label="Domain of work" /> */}
        <input
          className="button"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          style={{
            textAlign: "left",
          }}
        />
        <input
          className="button"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          style={{
            textAlign: "left",
          }}
        />
        <input
          className="button"
          type="text"
          name="domain_of_work"
          id="domain_of_work"
          placeholder="Domain of Work"
          style={{
            textAlign: "left",
          }}
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button type="submit" className="button button-primary btn-msg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
