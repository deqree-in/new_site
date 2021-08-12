import "./index.css";

const Card = ({ icon, title, desc }) => {
  return (
    <div className="wrapper-card">
      <span className="title-card">
        <span className="icon"> {icon} </span>
        <span>{title}</span>
      </span>
      <span className="desc"> {desc} </span>
    </div>
  );
};

export default Card;
