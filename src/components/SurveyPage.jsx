import React from "react";
import { useNavigate } from "react-router-dom";

const SurveyPage = ({
  question,
  options = [],
  onSelect,
  currentStep,
  setCurrentStep,
  totalSteps,
  selectedOption,
  configuration,
  steps,
}) => {
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      navigate(steps[currentStep + 1].path);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      navigate(steps[currentStep - 1].path);
    }
  };

  return (
    <div className="container">
      <h1>{question}</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => onSelect(option)}
            className={`option-card ${selectedOption?.id === option.id ? "selected" : ""}`}
          >
            <h3>{option.label}</h3>
            <p>${option.price}</p>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={prevStep} disabled={currentStep === 0}>
          Back
        </button>
        <button onClick={nextStep} disabled={!selectedOption}>
          Next
        </button>
      </div>
      <div className="summary">
        <h2>Your Configuration</h2>
        <ul>
          {steps.map((step) => (
            <li key={step.id}>
              <a href={step.path} onClick={(e) => { e.preventDefault(); navigate(step.path); }}>
                <span className="label">{step.label}</span>
                <span className="value">
                  {configuration[step.id]?.label || "Unselected"}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SurveyPage;
