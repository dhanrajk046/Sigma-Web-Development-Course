import React from "react";

const card = ({image, title, description, buttonText }) => {
    return(
        <div className="Card">
            <img src={image} alt={title} className="Card-image"/>

            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <button>{buttonText}</button>
            </div>
        </div>
    );
};

export default card;

