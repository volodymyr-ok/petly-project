import { ErrorMessage, Field, Formik } from "formik";
import {
  Input,
  Label,
  SubTitle,
  LabelText,
  RadioLabel,
  RadioGroup,
  RadioBox,
  ErrorText,
  FormCustom,
  Title,
  ButtonBox,
  Button,
  BackBtn,
} from "../ModalAddNotice.styled";
import * as yup from "yup";

const cyrillic = /[A-Za-z]/;
const validationSchema = yup.object({
  categoryName: yup.string().required("Choose category"),
  title: yup
    .string()
    .min(2)
    .max(16)
    .required()
    .matches(cyrillic, "only Latin letters"),
  name: yup.string().min(2).max(16).matches(cyrillic, "only Latin letters"),
  birthday: yup.string(),
  breed: yup.string().min(2).max(16).matches(cyrillic, "only Latin letters"),
});

export const StepOne = ({ onClose, next, data }) => {
  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <ErrorText>{message}</ErrorText>}
      />
    );
  };
  const handleSubmit = (data) => {
    next(data);
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <FormCustom>
          <Title>Add pet</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </SubTitle>
          <RadioGroup role="group" aria-labelledby="my-radio-group">
            <RadioBox>
              <Field
                type="radio"
                name="categoryName"
                value="lost-found"
                id="lost-found"
              />
              <RadioLabel htmlFor="lost-found">lost/found</RadioLabel>
            </RadioBox>
            <RadioBox>
              <Field
                type="radio"
                name="categoryName"
                value="in-good-hands"
                id="in-good-hands"
              />
              <RadioLabel htmlFor="in-good-hands">in good hands</RadioLabel>
            </RadioBox>
            <RadioBox>
              <Field type="radio" name="categoryName" value="sell" id="sell" />
              <RadioLabel htmlFor="sell">sell</RadioLabel>
            </RadioBox>
          </RadioGroup>
          <FormError name="categoryName" checked />

          <Label>
            <LabelText>
              Tittle of ad<span>*</span>
            </LabelText>
            <Input
              name="title"
              type="text"
              data-title
              placeholder="Type name pet"
            />
            <FormError name="title" />
          </Label>
          <Label>
            <LabelText>Name pet</LabelText>
            <Input name="name" type="text" placeholder="Type name pet" />
            <FormError name="name" />
          </Label>
          <Label>
            <LabelText>Date of birth</LabelText>
            <Input
              name="birthday"
              type="text"
              placeholder="Type date of birth"
            />
            <FormError name="birthday" />
          </Label>
          <Label>
            <LabelText>Breed</LabelText>
            <Input name="breed" type="text" placeholder="Type breed" />
            <FormError name="breed" />
          </Label>
          <ButtonBox>
            <Button type="submit">Next</Button>
            <BackBtn type="button" onClick={() => onClose()}>
              Cancel
            </BackBtn>
          </ButtonBox>
        </FormCustom>
      )}
    </Formik>
  );
};
