import React from "react";
import "./TestimonialCard.css"

const CustomerCard = ({ fullName,review }) => {
  return (
    <div className="costumer-card">
      
      <div className="customer-info">
        <h2 className="customer-name">Name:{fullName}</h2> 
        <h2 className="customer-review">Review:  {review}</h2>
      </div>
    </div>
  );
};

export default CustomerCard;
