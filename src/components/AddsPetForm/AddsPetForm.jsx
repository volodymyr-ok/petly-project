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

  const handleNextStep = (newData, final = false, avatar = null) => {
    setData((prev) => ({ ...prev, ...newData}));
    if (final) {
      const petInfo = {
        name: newData.name,
        birthday: newData.birthday,
        breed: newData.breed,
        comments: newData.comments,
        avatar: avatar
      }
      dispatch(addPet(petInfo))
      // tut robymo zapros vysylajemo body i avatar okremo
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
