import { StepOne } from "./steps/StepOne";
import { StepTwo } from "./steps/StepTwo";
import { useState } from "react";

export const AddsPetForm = ({ onClose }) => {
  const [data, setData] = useState({
    name: "",
    birthday: "",
    breed: "",
    comments: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} onClose={onClose} />,
    <StepTwo prev={handlePrevStep} data={data} onClose={onClose} />,
  ];

  return <div>{steps[currentStep]}</div>;
};
