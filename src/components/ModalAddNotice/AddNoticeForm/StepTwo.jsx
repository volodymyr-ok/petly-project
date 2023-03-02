import {
  Input,
  Label,
  LabelText,
  RadioGroup,
  LabelSex,
  SexBox,
  ErrorText,
  FormCustom,
  Title,
  ButtonBox,
  Button,
  BackBtn,
  AddFile,
  FieldPhoto,
  FieldTextarea,
  LabelBox,
  StyledLabel,
  RadioWrap,
} from "../ModalAddNotice.styled";
import { ReactComponent as MaleSvg } from "../../../assets/svg/male.svg";
import { ReactComponent as FemaleSvg } from "../../../assets/svg/female.svg";
import { Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { ReactComponent as AddPlusButton } from "../../../assets/svg/Plus.svg";
import { useDispatch } from "react-redux";
import { addNotice } from "../../../redux/notice/notice-operations";

const validationSchema = yup.object({
  sex: yup.string().required("Choose category"),
  location: yup
    .string()
    .min(5, "The address must contain the city, regions")
    .matches(
      /^[A-Za-z]{2,},\s[A-Za-z]{2,}$/,
      "The address must contain the city, regions: 'Kyiv, Kyiv'"
    )
    .required("Address is required"),
  comments: yup.string().min(8).max(120),
  price: yup.number("Only numbers"),
});

export const StepTwo = ({ data, prev, onClose }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  console.log("Temporary log (can be deleted) ===>", file);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (data) => {
    const {
      title,
      name,
      birthday,
      breed,
      categoryName,
      sex,
      location,
      price,
      comments,
    } = data;
    console.log("DATA", data);
    const comment = comments ? comments : "test test";
    const formData = new FormData();
    formData.append("avatar", file);
    formData.append("title", title);
    formData.append("name", name);
    formData.append("birthday", birthday);
    formData.append("categoryName", categoryName);
    formData.append("sex", sex);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("breed", breed);
    formData.append("comments", comment);

    console.log("handleSubm", formData, file);

    dispatch(addNotice(formData));
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <FormCustom>
          <Title>Add pet</Title>
          <RadioWrap>
            <LabelSex>
              The sex<span>*</span>:
            </LabelSex>
            <RadioGroup role="group" aria-labelledby="my-radio-group">
              <SexBox>
                <MaleSvg />
                <Field type="radio" name="sex" value="male" id="male" />
                <label htmlFor="male">Male</label>
              </SexBox>
              <SexBox>
                <FemaleSvg />
                <Field type="radio" name="sex" value="female" id="female" />
                <label htmlFor="female">Female</label>
              </SexBox>
            </RadioGroup>
            <FormError name="sex" checked />
          </RadioWrap>

          <Label>
            <LabelText>
              Location<span>*</span>
            </LabelText>
            <Input name="location" type="text" placeholder="City, region" />
            <FormError name="location" />
          </Label>

          {values.categoryName === "sell" && (
            <Label>
              <LabelText>
                Price<span>*</span>
              </LabelText>
              <Input name="price" type="text" placeholder="Type price" />
              <FormError name="price" />
            </Label>
          )}
          <Label>
            <LabelText>Load the pet&apos;s image</LabelText>
            <AddFile htmlFor="myPetsPhoto">
              {file ? <p>file downloaded</p> : <AddPlusButton />}
              <FieldPhoto
                id="myPetsPhoto"
                type="file"
                name="myPetsPhoto"
                onChange={handleChange}
              />
            </AddFile>
            <FormError name="myPetsPhoto" />
          </Label>

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
          <ButtonBox>
            <Button type="submit">Done</Button>
            <BackBtn type="button" onClick={() => prev(values)}>
              Back
            </BackBtn>
          </ButtonBox>
        </FormCustom>
      )}
    </Formik>
  );
};
