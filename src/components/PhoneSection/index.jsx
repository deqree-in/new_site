import Card from "./Card";
import phone from "../../images/phone2.svg";
import { useMediaQuery } from "@material-ui/core";
import "./index.css";

const PhoneSection = () => {
  const isPhone = useMediaQuery("(max-width: 640px)");
  return (
    <div className="phone-wrapper">
      <p className="head">Our vision and mission</p>
      <div className="cols">
        <div className="col1">
          {(isPhone
            ? [
                "Exploiting the benefits of Blockchain Technology",
                "Creating an Industry Standard for trusted credentials",
                "Pioneering Enterprise-grade solutions for the country",
                "Building fully decentralized apps to ensure trust",
                "Smart-contract based usecases along with credential validation",
                "Cost effective",
              ]
            : [
                "Exploiting the benefits of Blockchain Technology",
                "Creating an Industry Standard for trusted credentials",
                "Pioneering Enterprise-grade solutions for the country",
              ]
          ).map((item, ndx) => (
            <Card
              key={ndx}
              align={isPhone ? "left" : "right"}
              icon={<i className="fab fa-bitcoin"></i>}
              title={item}
              // desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
            />
          ))}
        </div>
        {!isPhone && (
          <div className="phone">
            <img
              src={phone}
              alt="deqree"
              style={{ minWidth: "700px", height: "90vh" }}
            />
          </div>
        )}
        {!isPhone && (
          <div className="col2">
            {[
              "Building fully decentralized apps to ensure trust",
              "Smart-contract based usecases along with credential validation",
              "Cost effective",
            ].map((item, ndx) => (
              <Card
                align="left"
                key={ndx}
                icon={<i className="fab fa-bitcoin"></i>}
                title={item}
                // desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneSection;
