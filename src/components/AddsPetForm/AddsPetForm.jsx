import { StepOne } from "./steps/StepOne";
import { StepTwo } from "./steps/StepTwo";
import { useState } from "react";

export const AddsPetForm = ({onClose,onEdit,post}) => {

  const [data, setData] = useState({
    name: post?.name || "",
    birthday: post?.birthday || "",
    breed: post?.breed || "",
    comments: post?.comments || "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (newData, final = false, file = null) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final && post?._id && file ) {
      const formData = new FormData();
      formData.append("avatar", file);
      onEdit([post._id, newData, formData])

    }else if(final && post?._id && !file){

      onEdit([post._id, newData, false])

    }
    else if(final && !post?._id){
      const formData = new FormData();
      formData.append("avatar", file);
      formData.append("name", newData.name);
      formData.append("birthday", newData.birthday);
      formData.append("breed", newData.breed);
      formData.append("comments", newData.comments);
      onEdit(formData)
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    
    <StepOne next={handleNextStep} data={data} onClose={onClose} />,
    <StepTwo
      avatar={post?.avatarURL}
      prev={handlePrevStep}
      next={handleNextStep}
      data={data}
      onClose={onClose}
    />,
  ];

  return <div>
    {steps[currentStep]}</div>;
};
