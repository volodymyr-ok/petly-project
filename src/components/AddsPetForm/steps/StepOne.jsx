import { Formik, ErrorMessage } from "formik";
import {
  ButtonCloseModal,
  ButtonCloseIcon,
  Title,
  ErrorText,
  ModalItem,
  FlexBox,
  StyledLabel,
  FormStyled,
  FieldStyled,
  CancelBtn,
  NextBtn,
  LabelBox,
} from "../../../components/AddsPetForm/AddsPetModalStyled";
import * as yup from "yup";
const cyrillic = /[A-Za-z]/;
const validationSchema = yup.object({
  name: yup
    .string()
    .min(2)
    .max(16)
    .required()
    .matches(cyrillic, "only Latin letters"),
  birthday: yup.string().required(),
  breed: yup
    .string()
    .min(2)
    .max(16)
    .required()
    .matches(cyrillic, "only Latin letters"),
});

export const StepOne = (props) => {
  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  const handleSubmit = (data) => {
    props.next(data);
  };

  const { onClose } = props;
  return (
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <ModalItem>
          <ButtonCloseModal type="button" onClick={() => onClose()}>
            <ButtonCloseIcon />
          </ButtonCloseModal>
          <FormStyled>
            <Title>Add pet</Title>
            <LabelBox>
              <StyledLabel htmlFor="name">
                Name pet
                <FieldStyled
                  type="text"
                  name="name"
                  placeholder="Type name pet"
                />
              </StyledLabel>
            </LabelBox>
            <FormError name="name" />
            <LabelBox>
              <StyledLabel htmlFor="birthday">
                Date of birth
                <FieldStyled
                  type="text"
                  name="birthday"
                  placeholder="Type date of birth"
                />
              </StyledLabel>
            </LabelBox>
            <FormError name="birthday" />

            <LabelBox>
              <StyledLabel htmlFor="breed">
                Breed
                <FieldStyled
                  type="text"
                  name="breed"
                  placeholder="Type breed"
                />
              </StyledLabel>
            </LabelBox>
            <FormError name="breed" />
            <FlexBox>
              <NextBtn type="submit">Next</NextBtn>
              <CancelBtn type="button" onClick={() => onClose()}>
                Cancel
              </CancelBtn>
            </FlexBox>
          </FormStyled>
        </ModalItem>
      )}
    </Formik>
  );
};
