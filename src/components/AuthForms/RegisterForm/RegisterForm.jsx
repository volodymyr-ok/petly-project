import React from "react";
import { FormikWizard } from "formik-wizard-form";

import { BackBtn, Button } from "../../LoginBtn/LoginBtn.styled";
import { Container } from "../../Container/Container";
import {
  FormCustom,
  FormLink,
  Paragraph,
  TitleAuth,
  Wrapper,
} from "../Forms.styled";
import { StepOne } from "./StepOne/StepOne";
import { StepTwo } from "./StepTwo/StepTwo";

export const passwordRegexp = /^[A-Za-z0-9!?#$%^&_\-*]{7,32}$/;
export const nameRegexp = /^[a-zA-Z]{2,20}$/;
export const phoneRegexp = /^\+380\d{9}$/;
export const emailRegexp =
  /^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/;

export const RegisterForm = () => {
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
        steps={[
          {
            component: StepOne,
          },
          {
            component: StepTwo,
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
