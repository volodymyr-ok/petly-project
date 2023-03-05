import { useState } from "react";

import { ModalBox } from "../ModalAddNotice.styled";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";

// const category = ["lost-found", "in-good-hands", "sell"];

export const AddNoticeForm = ({ onClose, petInfo }) => {
  const [data, setData] = useState({
    title: petInfo?.title || "",
    name: petInfo?.name || "",
    birthday: petInfo?.birthday || "",
    breed: petInfo?.breed || "",
    categoryName: "sell" || petInfo?.categoryName,
    sex: petInfo?.sex || "",
    location: petInfo?.location || "",
    price: petInfo?.price || "",
    comments: petInfo?.comments || "",
    avatar: petInfo?.avatar || "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  // const dispatch = useDispatch(); "6403601a42dc8b5f0ae334ac"

  const handleNextStep = (newData, final = false) => {
    console.log("newData", newData);
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
    <StepOne
      next={handleNextStep}
      id={petInfo?._id}
      data={data}
      onClose={onClose}
    />,
    <StepTwo
      prev={handlePrevStep}
      id={petInfo?._id}
      avatar={petInfo?.avatar}
      data={data}
      onClose={onClose}
    />,
  ];

  return <ModalBox>{steps[currentStep]}</ModalBox>;
};
