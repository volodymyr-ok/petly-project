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
  Text,
  LoginGoogle,
} from "../Forms.styled";
import { LoginBtn } from "../../LoginBtn/LoginBtn";
import { Container } from "../../Container/Container";
import { emailRegexp } from "../RegisterForm/RegisterForm";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/auth/auth-operations";
import { InputPassword } from "../InputPassword";
import { ReactComponent as GoogleIcon } from "../../../assets/svg/google.svg";

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
  const dispatch = useDispatch();

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
          onSubmit={(values, actions) => {
            const { email, password } = values;
            console.log("login", values);
            const data = { email, password };
            dispatch(loginUser(data));

            actions.resetForm();
          }}
        >
          {() => (
            <FormCustom>
              <Label>
                <Input name="email" type="text" placeholder="Email" />
                <FormError name="email" />
              </Label>
              <Label>
                <InputPassword />
                <FormError name="password" />
              </Label>
              <LoginBtn text={"Login"} />
              <Text> You can log in with your Google Account:</Text>
              <LoginGoogle
                // target="_blank"
                aria-label="goggle"
                rel="noopener noreferrer nofollow"
                href={`https://petly-2v85.onrender.com/api/users/google`}
              >
                <GoogleIcon /> Google
              </LoginGoogle>
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
