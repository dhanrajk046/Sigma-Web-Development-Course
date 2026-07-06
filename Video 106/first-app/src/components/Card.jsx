import React from "react";
import "./Card.css";

const card = (props) => {
  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/067/054/194/small/laptop-displays-running-code-cybersecurity-is-important-blurred-lights-in-background-give-awareness-of-digital-security-information-technology-showing-programming-concept-data-safety-photo.jpeg"
        alt=""
        width={333}
        style={{ border: "2px solid black" }}
      />
      <h1>{props.title}</h1>
      <p1>{props.description}</p1>
    </div>
  );
};

export default card;
