import { Formik, ErrorMessage } from "formik";
import {
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
import moment from "moment";
import DatePickerStyled from "../../DatePicker/DatePickerStyled";
import { useState } from "react";
import * as yup from "yup";
const cyrillic = /[A-Za-z]/;
const validationSchema = yup.object({
  name: yup
    .string()
    .min(2)
    .max(16)
    .required()
    .matches(cyrillic, "only Latin letters"),
  birthday: yup.string(),
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
  const handleChange = (data) => {

    setStartDate(data);
  };

  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (data) => {
    if (startDate !== "") {
      const birthday = moment(startDate).format("DD.MM.YYYY");
      data.birthday = birthday;
    }
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
            {/* <LabelBox>
              <StyledLabel htmlFor="birthday">
                Date of birth
                <FieldStyled
                  type="text"
                  name="birthday"
                  placeholder="Type date of birth"
                />
              </StyledLabel>
            </LabelBox> */}
               <LabelBox>
            <StyledLabel  htmlFor="birthday">
              Date of birth
            <DatePickerStyled
              startDate={startDate}
              customStyle={true}
              // disabled={disable}
              handleChange={handleChange}
            />
            </StyledLabel>
            <FormError name="birthday" />
          </LabelBox>
 

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
