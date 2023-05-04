import "./TripStyles.css";

import Place from "../assets/bandarban.jpg";
import Place2 from "../assets/bandarban2.jpg";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="img" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default TripData;
