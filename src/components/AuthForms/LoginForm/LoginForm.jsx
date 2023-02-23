import { Formik, ErrorMessage } from "formik";

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

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Container>
      <Wrapper>
        <TitleAuth>Login</TitleAuth>
        <Formik initialValues={initialValues}>
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
