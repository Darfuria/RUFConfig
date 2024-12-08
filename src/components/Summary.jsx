import React from "react";

const Summary = ({ configuration, totalCost }) => (
  <div>
    <h2>Your Configuration</h2>
    <ul>
      {Object.values(configuration).map((option) => (
        <li key={option.id}>
          {option.label}: ${option.price}
        </li>
      ))}
    </ul>
    <h3>Total Cost: ${totalCost}</h3>
  </div>
);

export default Summary;
