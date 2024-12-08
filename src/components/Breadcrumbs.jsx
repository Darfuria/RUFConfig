import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ steps, currentStep }) => (
  <nav>
    <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
      {steps.map((step, index) => (
        <li key={step.id} style={{ marginRight: "10px" }}>
          <Link to={step.path} style={{ textDecoration: index === currentStep ? "underline" : "none" }}>
            {step.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Breadcrumbs;
