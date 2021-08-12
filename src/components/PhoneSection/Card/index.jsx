import "./index.css";

const Card = ({ align, icon, title, desc }) => {
  return (
    <div className="wrapper-card-2">
      <span className="title-card-2">
        <span
          className="icon-2"
          style={{
            textAlign: align,
          }}
        >
          {icon}
        </span>
        <span
          style={{
            textAlign: align,
          }}
        >
          {title}
        </span>
      </span>
      <span
        className="desc-2"
        style={{
          textAlign: align,
        }}
      >
        {desc}
      </span>
    </div>
  );
};

export default Card;
