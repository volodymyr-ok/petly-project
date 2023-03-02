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
      const petInfo = {
        name: newData.name,
        breed: newData.breed,
        birthday: newData.birthday,
        comments: newData.comments,
         avatar: formData
      }
      console.log(petInfo)
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
