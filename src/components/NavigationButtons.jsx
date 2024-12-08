import React from "react";

const NavigationButtons = ({ nextStep, prevStep }) => (
  <div>
    <button onClick={prevStep}>Back</button>
    <button onClick={nextStep}>Next</button>
  </div>
);

export default NavigationButtons;
