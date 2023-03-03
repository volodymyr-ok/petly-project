// import { FormikWizard } from "formik-wizard-form";
import { useState } from "react";
// import * as Yup from "yup";

import {
  // ButtonBox,
  // FormCustom,
  // Title,
  // BackBtn,
  // Button,
  ModalBox,
} from "../ModalAddNotice.styled";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";

// const category = ["lost-found", "in-good-hands", "sell"];

export const AddNoticeForm = ({ onClose }) => {
  const [data, setData] = useState({
    title: "",
    name: "",
    birthday: "",
    breed: "",
    categoryName: "sell",
    sex: "",
    location: "",
    price: "",
    comments: "",
    avatar: "",
  });
  const [currentStep, setCurrentStep] = useState(0);

  // const dispatch = useDispatch();

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

  return <ModalBox>{steps[currentStep]}</ModalBox>;

  // const initialValues = {
  //   title: "",
  //   name: "",
  //   birthday: "",
  //   breed: "",
  //   categoryName: "sell",

  //   sex: "",
  //   location: "",
  //   price: "",
  //   comments: "",
  //   avatar: "",
  // };

  // return (
  //   <>
  //     <FormikWizard
  //       initialValues={initialValues}
  //       validateOnNext
  //       activeStepIndex={0}
  //       // onSubmit={(values, actions) => {
  //       //   const { title, name, birthday, breed, city, phone } = values;
  //       //   // const data = { title, name, birthday, breed, city, phone };
  //       //   // dispatch(registerUser(data));

  //       //   actions.resetForm();
  //       // }}
  //       steps={[
  //         {
  //           component: AddNoticeStepOne,
  //           validationSchema: Yup.object().shape({
  //             title: Yup.string().required("Title is required"),
  //             name: Yup.string(),
  //             birthday: Yup.string(),
  //             breed: Yup.string(),
  //             categoryName: Yup.string()
  //               .required("Choose category")
  //               .oneOf(category),
  //           }),
  //         },
  //         {
  //           component: AddNoticeStepTwo,
  //           validationSchema: Yup.object().shape({
  //             // name: Yup.string().required("First name is required"),
  //             sex: Yup.string()
  //               .required("Choose sex")
  //               .oneOf(["male", "female"]),
  //             location: Yup.string().required("Location is required"),
  //             price: Yup.number(),
  //             comments: Yup.string(),
  //             avatar: Yup.string(),
  //           }),
  //         },
  //       ]}
  //     >
  //       {({ renderComponent, handlePrev, handleNext, values, isLastStep }) => (
  //         <div>
  //           <Title>Add pet</Title>
  //           <FormCustom>
  //             {renderComponent()}

  //             {!isLastStep ? (
  //               <ButtonBox>
  //                 <Button type="button" onClick={handleNext}>
  //                   Next
  //                 </Button>
  //                 <BackBtn type="button" onClick={onClose}>
  //                   Cancel
  //                 </BackBtn>
  //               </ButtonBox>
  //             ) : (
  //               <ButtonBox>
  //                 <Button>Done</Button>
  //                 <BackBtn type="button" onClick={handlePrev}>
  //                   Back
  //                 </BackBtn>
  //               </ButtonBox>
  //             )}
  //           </FormCustom>
  //         </div>
  //       )}
  //     </FormikWizard>
  //   </>
  // );
};
