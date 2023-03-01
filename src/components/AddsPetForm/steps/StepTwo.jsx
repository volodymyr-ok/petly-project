import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";

import {
  LabelBox,
  TitleItemTwo,
  BtnAddFileIcon,
  ErrorText,
  AddFile,
  ButtonCloseModal,
  ButtonCloseIcon,
  ModalItemTwo,
  FlexBox,
  FormStyled,
  TitleTwo,
  FieldPhoto,
  StyledLabel,
  FieldTextarea,
  NextBtn,
  CancelBtn,
} from "../../../components/AddsPetForm/AddsPetModalStyled";
// import { useDispatch } from "react-redux";

const validationSchema = yup.object({
  comments: yup.string().min(8).max(120).required(),
});

export const StepTwo = ({ data, prev, onClose }) => {
  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  // const dispatch = useDispatch();

  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  // const handleSubmit = (values, { resetForm }) => {
  //   let formData = new FormData();
  //   for (let value in values) {
  //     formData.append(value, values[value]);
  //   }

  //   formData.append("myPetsPhoto", file);

  //   for (let property of formData.entries()) {
  //     console.log(property[0], property[1]);
  //   }
  //   dispatch(addPetOperation(formData));
  //   resetForm();
  //   onClose();
  // };

  return (
    <Formik
      initialValues={data}
      // onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <ModalItemTwo>
          <ButtonCloseModal type="button" onClick={() => onClose()}>
            <ButtonCloseIcon />
          </ButtonCloseModal>
          <FormStyled>
            <TitleTwo>Add pet</TitleTwo>
            <TitleItemTwo>Add photo and some comments</TitleItemTwo>

            <AddFile htmlFor="myPetsPhoto">
              {file ? <p>File added success</p> : <BtnAddFileIcon />}

              <FieldPhoto
                id="myPetsPhoto"
                type="file"
                name="myPetsPhoto"
                onChange={handleChange}
              />
            </AddFile>
            <FormError name="myPetsPhoto" />
            <LabelBox>
              <StyledLabel htmlFor="comments">
                Comments
                <FieldTextarea
                  type="text"
                  name="comments"
                  placeholder="Type comments"
                  as="textarea"
                />
              </StyledLabel>
            </LabelBox>
            <FormError name="comments" />
            <FlexBox>
              <NextBtn type="submit">Done</NextBtn>
              <CancelBtn type="button" onClick={() => prev(values)}>
                Back
              </CancelBtn>
            </FlexBox>
          </FormStyled>
        </ModalItemTwo>
      )}
    </Formik>
  );
};
