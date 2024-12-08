import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import Breadcrumbs from "./components/Breadcrumbs";
import SurveyPage from "./components/SurveyPage";
import Summary from "./components/Summary";
import NavigationButtons from "./components/NavigationButtons";

const steps = [
  { id: "model", label: "Model", path: "/model" },
  { id: "series", label: "Series", path: "/series" },
  { id: "strings", label: "Strings", path: "/strings" },
  { id: "orientation", label: "Orientation", path: "/orientation" },
  { id: "finish", label: "Finish", path: "/finish" },
  { id: "top", label: "Top", path: "/top" },
  { id: "back", label: "Back", path: "/back" },
  { id: "color", label: "Color", path: "/color" },
  { id: "neckFinish", label: "Neck Finish", path: "/neck-finish" },
  { id: "headstock", label: "Headstock", path: "/headstock" },
  { id: "fretboard", label: "Fretboard", path: "/fretboard" },
  { id: "inlays", label: "Inlays", path: "/inlays" },
  { id: "dots", label: "Dots", path: "/dots" },
  { id: "splatter", label: "Splatter", path: "/splatter" },
  { id: "finishExtras", label: "Finish Extras", path: "/finish-extras" },
  { id: "bridge", label: "Bridge", path: "/bridge" },
  { id: "tuners", label: "Tuners", path: "/tuners" },
  { id: "hardware", label: "Hardware", path: "/hardware" },
  { id: "stringsGauge", label: "Strings Gauge", path: "/strings-gauge" },
  { id: "pickupsConfig", label: "Pickups Config", path: "/pickups-config" },
  { id: "pickupsBrand", label: "Pickups Brand", path: "/pickups-brand" },
  { id: "pickupsFinish", label: "Pickups Finish", path: "/pickups-finish" },
  { id: "electronicsConfig", label: "Electronics Config", path: "/electronics-config" },
  { id: "switchType", label: "Switch Type", path: "/switch-type" },
  { id: "electronicsExtras", label: "Electronics Extras", path: "/electronics-extras" },
];


const optionsData = {
  model: [
    { id: "schrodinger", label: "Schrodinger", price: 2699 },
    { id: "vinci", label: "Vinci", price: 2799 },
  ],
  series: [
    { id: "doctor", label: "Doctor", price: 0 },
    { id: "professor", label: "Professor", price: 500 },
  ],
  strings: [
    { id: "6", label: "6 Strings", price: 0 },
    { id: "7", label: "7 Strings", price: 175 },
    { id: "8", label: "8 Strings", price: 250}
  ],
  orientation: [
    { id: "right", label: "Right-Handed", price: 0 },
    { id: "left", label: "Left-Handed", price: 0 },
  ],
  // Add options for all other steps...
};

const App = () => {
  const [configuration, setConfiguration] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const handleSelection = (stepKey, option) => {
    setConfiguration({ ...configuration, [stepKey]: option });
  };

  const calculateTotal = () =>
    Object.values(configuration).reduce((total, option) => total + (option?.price || 0), 0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={steps[0].path} replace />} />
        {steps.map((step, index) => {
          const options = optionsData[step.id]; // Safely get options for the current step
          return (

            <Route
              key={step.id}
              path={step.path}
              element={
                <SurveyPage
                  question={`Select your ${step.label}`}
                  options={options || []} // Ensure options is never undefined
                  onSelect={(option) => handleSelection(step.id, option)}
                  currentStep={index}
                  setCurrentStep={setCurrentStep}
                  totalSteps={steps.length - 1}
                  selectedOption={configuration[step.id]}
                  configuration={configuration}
                  steps={steps}
                />
              }
            />
          );
        })}
        <Route
          path="/summary"
          element={<Summary configuration={configuration} totalCost={calculateTotal()} />}
        />
      </Routes>
    </div>
  );
};

export default App;
