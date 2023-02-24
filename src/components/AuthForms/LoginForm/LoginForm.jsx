import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  Input,
  TitleAuth,
  Wrapper,
  Paragraph,
  FormLink,
  FormCustom,
  Label,
  ErrorText,
} from "../Forms.styled";
import { LoginBtn } from "../../LoginBtn/LoginBtn";
import { Container } from "../../Container/Container";
import { emailRegexp } from "../RegisterForm/RegisterForm";
// import { useDispatch } from "react-redux";

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <ErrorText>{message}</ErrorText>}
    />
  );
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, "Please enter valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Minimum password length is 7 characters")
    .max(32)
    .matches(/^[A-Za-z0-9]*$/, "Password can only contain letters and numbers")
    .required("Password is required"),
});

export const LoginForm = () => {
  //  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Container>
      <Wrapper>
        <TitleAuth>Login</TitleAuth>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {() => (
            <FormCustom>
              <Label>
                <Input name="email" type="text" placeholder="Email" />
                <FormError name="email" />
              </Label>
              <Label>
                <Input name="password" type="text" placeholder="Password" />
                <FormError name="password" />
              </Label>
              <LoginBtn text={"Login"} />
            </FormCustom>
          )}
        </Formik>

        <Paragraph>
          <span>Don't have an account? </span>
          <FormLink to="/register">Register</FormLink>
        </Paragraph>
      </Wrapper>
    </Container>
  );
};
