import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { ReactComponent as CloseButtonIcon } from "../../../assets/svg/closeiconmodal.svg";
import { ReactComponent as AddPlusButton } from "../../../assets/svg/Plus.svg";
import {
  LabelBox,
  TitleItemTwo,
  ErrorText,
  AddFile,
  ButtonCloseModal,
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

  const [file, setFile] = useState(null);
  console.log("Temporary log (can be deleted) ===>", file);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <Formik
      initialValues={data}
      // onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <ModalItemTwo>
          <ButtonCloseModal type="button" onClick={() => onClose()}>
            <CloseButtonIcon />
          </ButtonCloseModal>
          <FormStyled>
            <TitleTwo>Add pet</TitleTwo>
            <TitleItemTwo>Add photo and some comments</TitleItemTwo>

            <AddFile htmlFor="myPetsPhoto">
              {file ? <p>File added success</p> : <AddPlusButton />}
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
