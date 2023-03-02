import { FormikWizard } from "formik-wizard-form";
import { useEffect } from "react";
import * as Yup from "yup";
import { StepTwo } from "../../AuthForms/RegisterForm/StepTwo/StepTwo";
import {
  ButtonBox,
  FormCustom,
  Title,
  BackBtn,
  Button,
} from "../ModalAddNotice.styled";
import { AddNoticeStepOne } from "./AddNoticeStepOne";

export const passwordRegexp = /^[A-Za-z0-9!?#$%^&_\-*]{7,32}$/;
export const nameRegexp = /^[a-zA-Z]{2,20}$/;
export const phoneRegexp = /^\+380\d{9}\S*$/;
export const emailRegexp =
  /^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/;

const category = ["lost-found", "in-good-hands", "sell"];

export const AddNoticeForm = ({ onClose }) => {
  // const dispatch = useDispatch();

  const initialValues = {
    title: "",
    name: "",
    birthday: "",
    breed: "",
    categoryName: "sell",

    city: "",
    phone: "",
  };

  return (
    <>
      <FormikWizard
        initialValues={initialValues}
        validateOnNext
        activeStepIndex={0}
        // onSubmit={(values, actions) => {
        //   const { title, name, birthday, breed, city, phone } = values;
        //   // const data = { title, name, birthday, breed, city, phone };
        //   // dispatch(registerUser(data));

        //   actions.resetForm();
        // }}
        steps={[
          {
            component: AddNoticeStepOne,
            validationSchema: Yup.object().shape({
              title: Yup.string().required("Title is required"),
              name: Yup.string(),
              birthday: Yup.string(),
              breed: Yup.string(),
              categoryName: Yup.string()
                .required("Choose category")
                .oneOf(category),
            }),
          },
          {
            component: StepTwo,
            validationSchema: Yup.object().shape({
              // name: Yup.string().required("First name is required"),
              city: Yup.string()
                .min(5, "The address must contain the city, regions")
                .matches(
                  /^[A-Za-z]{2,},\s[A-Za-z]{2,}$/,
                  "The address must contain the city, regions: 'Kyiv, Kyiv'"
                )
                .required("Address is required"),
              phone: Yup.string()
                .matches(
                  phoneRegexp,
                  "phone must match the following +380671234567"
                )
                .required("Phone number is required"),
            }),
          },
        ]}
      >
        {({ renderComponent, handlePrev, handleNext, values, isLastStep }) => (
          <div>
            <Title>Add pet</Title>
            <FormCustom>
              {renderComponent()}

              {!isLastStep ? (
                <ButtonBox>
                  <Button type="button" onClick={handleNext}>
                    Next
                  </Button>
                  <BackBtn type="button" onClick={onClose}>
                    Cancel
                  </BackBtn>
                </ButtonBox>
              ) : (
                <ButtonBox>
                  <Button>Done</Button>
                  <BackBtn type="button" onClick={handlePrev}>
                    Back
                  </BackBtn>
                </ButtonBox>
              )}
            </FormCustom>
          </div>
        )}
      </FormikWizard>
    </>
  );
};
