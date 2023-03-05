import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import {
  LabelBox,
  TitleItemTwo,
  ErrorText,
  ModalItemTwo,
  FlexBox,
  FormStyled,
  TitleTwo,
  StyledLabel,
  FieldTextarea,
  NextBtn,
  CancelBtn,
} from "../../../components/AddsPetForm/AddsPetModalStyled";
import { ImageCropper } from "../../ImageCropper/ImageCropper";

const validationSchema = yup.object({
  comments: yup.string().min(8).max(200).required(),
});

export const StepTwo = (props) => {
  const [image, setImage] = useState(null);
  const setCroppedImageFor = (file) => {
    setImage(file);
  };
  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <ErrorText>{message}</ErrorText>}
      />
    );
  };
  const handleSubmit = (e) => {
    props.next(e, true, image);
    props.onClose();
  };

  return (
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <ModalItemTwo>
          <FormStyled>
            <TitleTwo>Add pet</TitleTwo>
            <TitleItemTwo>Add photo and some comments</TitleItemTwo>
            <ImageCropper
              setCroppedImageFor={setCroppedImageFor}
            ></ImageCropper>
            <LabelBox>
              <StyledLabel htmlFor="comments">
                Comments
                <FieldTextarea
                  type="text"
                  name="comments"
                  placeholder="Type comments"
                  component="textarea"
                  rows="4"
                />
              </StyledLabel>
              <FormError name="comments" />
            </LabelBox>
            <FormError name="comments" />
            <FlexBox>
              <NextBtn type="submit">Done</NextBtn>
              <CancelBtn type="button" onClick={() => props.prev(values)}>
                Back
              </CancelBtn>
            </FlexBox>
          </FormStyled>
        </ModalItemTwo>
      )}
    </Formik>
  );
};
