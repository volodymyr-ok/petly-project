import { useDispatch, useSelector } from "react-redux";
import { selectPets } from "../../../redux/pets/pets-selectors";
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
import { addPets } from "../../../redux/pets/pets-operations";

const validationSchema = yup.object({
  comments: yup.string().min(8).max(200).required(),
});

export const StepTwo = (props) => {
  const dispatch = useDispatch();
  const pets = useSelector(selectPets);
  // console.log(pets);

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  const [imgFile, setImgFile] = useState(null);

  const handleChange = (event) => {
    setImgFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    // props.next(e, true, file);
    props.onClose();
    const { file, name, birthday, breed, comments } = props.data;
    const formData = new FormData();
    formData.append("avatarURL", file);
    formData.append("name", name);
    formData.append("birthday", birthday);
    formData.append("breed", breed);
    formData.append("comments", comments);

    console.log("handleSubm", file);

    dispatch(addPets(formData));
  };

  return (
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <ModalItemTwo>
          <ButtonCloseModal type="button" onClick={() => props.onClose()}>
            <CloseButtonIcon />
          </ButtonCloseModal>
          <FormStyled>
            <TitleTwo>Add pet</TitleTwo>
            <TitleItemTwo>Add photo and some comments</TitleItemTwo>

            <AddFile htmlFor="myPetsPhoto">
              {imgFile ? <p>File added success</p> : <AddPlusButton />}
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
                />
              </StyledLabel>
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
