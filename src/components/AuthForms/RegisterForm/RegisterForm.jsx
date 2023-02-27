import React from "react";
import { FormikWizard } from "formik-wizard-form";
import * as Yup from "yup";

import { BackBtn, Button } from "../../LoginBtn/LoginBtn.styled";
import { Container } from "../../Container/Container";
import {
  FormCustom,
  FormLink,
  LoginGoogle,
  Paragraph,
  Text,
  TitleAuth,
  Wrapper,
} from "../Forms.styled";
import { StepOne } from "./StepOne/StepOne";
import { StepTwo } from "./StepTwo/StepTwo";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/auth/auth-operations";
import { ReactComponent as GoogleIcon } from "../../../assets/svg/google.svg";

export const passwordRegexp = /^[A-Za-z0-9!?#$%^&_\-*]{7,32}$/;
export const nameRegexp = /^[a-zA-Z]{2,20}$/;
export const phoneRegexp = /^\+380\d{9}$/;
export const emailRegexp =
  /^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/;

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    city: "",
    phone: "",
  };

  return (
    <>
      <FormikWizard
        initialValues={initialValues}
        validateOnNext
        activeStepIndex={0}
        onSubmit={(values, actions) => {
          const { email, password, name, city, phone } = values;
          console.log("subn", values);
          const data = { email, password, name, city, phone };
          dispatch(registerUser(data));

          actions.resetForm();
        }}
        steps={[
          {
            component: StepOne,
            validationSchema: Yup.object().shape({
              email: Yup.string()
                .matches(emailRegexp, "Please enter valid email")
                .required("Email is required"),
              password: Yup.string()
                .min(7, "Minimum password length is 7 characters")
                .max(32)
                .matches(
                  /^[A-Za-z0-9]*$/,
                  "Password can only contain letters and numbers"
                )
                .required("Password is required"),
              confirmPassword: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Passwords must match"
              ),
            }),
          },
          {
            component: StepTwo,
            validationSchema: Yup.object().shape({
              name: Yup.string().required("First name is required"),
              city: Yup.string().required("Address is required"),
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
        {({ renderComponent, handlePrev, handleNext, isLastStep }) => (
          <Container>
            <Wrapper>
              <TitleAuth>Registration</TitleAuth>
              <FormCustom>
                {renderComponent()}

                {!isLastStep ? (
                  <Button onClick={handleNext}>Next</Button>
                ) : (
                  <>
                    <Button>Register</Button>
                    <BackBtn type="button" onClick={handlePrev}>
                      Back
                    </BackBtn>
                  </>
                )}

                <Text> You can registration with your Google Account:</Text>
                <LoginGoogle
                  target="_blank"
                  aria-label="goggle"
                  rel="noopener noreferrer nofollow"
                  href={`https://petly-2v85.onrender.com/api/users/google`}
                >
                  <GoogleIcon /> Google
                </LoginGoogle>
              </FormCustom>

              <Paragraph>
                <span>Already have an account? </span>
                <FormLink to="/login">Login</FormLink>
              </Paragraph>
            </Wrapper>
          </Container>
        )}
      </FormikWizard>
    </>
  );
};
