import { StepOne } from "./steps/StepOne";
import { StepTwo } from "./steps/StepTwo";
import { useState } from "react";
import { addPet } from "../../redux/pet/pet-operations";
import { useDispatch } from "react-redux";

export const AddsPetForm = ({ onClose }) => {
  const [data, setData] = useState({
    name: "",
    birthday: "",
    breed: "",
    comments: "",
  });
  const dispatch = useDispatch()

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (newData, final = false, file = null) => {
    setData((prev) => ({ ...prev, ...newData}));
    if (final) {
      const formData = new FormData();
      formData.append("avatar", file);
      formData.append("name", newData.name);
      formData.append("birthday", newData.birthday);
      formData.append("breed", newData.breed);
      formData.append("comments", newData.comments);
      dispatch(addPet(formData))

    }
 
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} onClose={onClose} />,
    <StepTwo prev={handlePrevStep} next={handleNextStep} data={data} onClose={onClose} />,
  ];

  return <div>{steps[currentStep]}</div>;
};
