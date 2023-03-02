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
      const name = new FormData();
      name.append("name", newData.name);
      const breed = new FormData();
      breed.append("breed", newData.breed);
      const comments = new FormData();
      comments.append("comments", newData.comments);
      const birthday = new FormData();
      birthday.append("birthday", newData.birthday);
     
      const petInfo = {
        // formData,
        // name: name,
        // breed: breed,
        // birthday: birthday,
         formData
      }
      console.log(petInfo)
      //dispatch(addPet(petInfo))
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
