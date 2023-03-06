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
import moment from "moment";
import DatePickerStyled from "../../DatePicker/DatePickerStyled";
import { useEffect, useState } from "react";

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

export const StepOne = ({ onClose, next, data, id }) => {
  const [startDate, setStartDate] = useState(new Date());

  const customStyle = {
    width: "100%",
    maxWidth: "100%",
    height: "47px",
    // display
  };

  useEffect(() => {
    if (data.birthday !== "") {
      const initData = data.birthday.split(".");
      const month = initData[1] < 10 ? initData[1].slice(1) : initData[1];
      const day = initData[0] < 10 ? initData[0].slice(1) : initData[0];
      const year = initData[2];
      setStartDate(new Date(year, month - 1, day));
    }
  }, [data.birthday]);

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  const handleChange = (data) => {
    setStartDate(data);
  };

  const handleSubmit = (data) => {
    if (data.categoryName !== "sell") {
      data.price = 1;
    }
    if (startDate !== "") {
      const birthday = moment(startDate).format("DD.MM.YYYY");
      data.birthday = birthday;
    }

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
          <Title>{id ? "Edit pet" : "Add pet"}</Title>
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
          <FormError name="categoryName" />

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
            <DatePickerStyled
              startDate={startDate}
              customStyle={customStyle}
              // disabled={disable}
              handleChange={handleChange}
            />
            <FormError name="birthday" />
          </Label>

          {/* <Label>
            <LabelText>Date of birth</LabelText>
            <Input
              name="birthday"
              type="text"
              placeholder="Type date of birth"
            />
            <FormError name="birthday" />
          </Label> */}

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
