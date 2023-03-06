import {
  Input,
  Label,
  LabelText,
  RadioGroupSex,
  LabelSex,
  SexBox,
  ErrorText,
  FormCustom,
  Title,
  ButtonBox,
  Button,
  BackBtn,
  // AddFile,
  // FieldPhoto,
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
import { ImageCropper } from "../../ImageCropper/ImageCropper";
//import { ReactComponent as AddPlusButton } from "../../../assets/svg/Plus.svg";
import { useDispatch } from "react-redux";
import {
  addNotice,
  updateNotice,
  updateNoticeAvatar,
} from "../../../redux/notice/notice-operations";
// import { ImageCropper } from "../../ImageCropper/ImageCropper";

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
  comments: yup.string().min(8).max(120).required("Comments are required"),
  price: yup
    .string()
    .matches(/^[1-9]+$/, "price must be greater than 0")
    .min(1)
    .max(9)
    .required("Price is required"),
});

export const StepTwo = ({ data, prev, onClose, avatar, id }) => {
  const dispatch = useDispatch();
  // const [file, setFile] = useState(null);

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

    if (id) {
      const newData = {
        title: data.title,
        name: data.name,
        birthday: data.birthday,
        breed: data.breed,
        categoryName: data.categoryName,
        sex: data.sex,
        location: data.location,
        price: data.price,
        comments: data.comments,
      };

      const formImage = new FormData();
      formImage.append("avatar", image);
      dispatch(updateNotice([newData, id]));
      dispatch(updateNoticeAvatar([formImage, id]));
    } else {
      console.log("chomus tut");
      const formData = new FormData();
      // formData.append("avatar", file);
      formData.append("avatar", image);
      formData.append("title", title);
      formData.append("name", name);
      formData.append("birthday", birthday);
      formData.append("categoryName", categoryName);
      formData.append("sex", sex);
      formData.append("location", location);
      formData.append("breed", breed);
      formData.append("comments", comments);
      if (price !== "") {
        formData.append("price", price);
      }
      dispatch(addNotice(formData));
    }

    onClose();
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, isValid, dirty }) => (
        <FormCustom>
          <Title>{id ? "Edit pet" : "Add pet"}</Title>

          <RadioWrap>
            <LabelSex>
              The sex<span>*</span>:
            </LabelSex>
            <RadioGroupSex role="group" aria-labelledby="my-radio-group">
              <SexBox>
                <Field type="radio" name="sex" value="male" id="male" />
                <label htmlFor="male">
                  <MaleSvg />
                  Male
                </label>
              </SexBox>
              <SexBox>
                <Field type="radio" name="sex" value="female" id="female" />
                <label htmlFor="female">
                  <FemaleSvg />
                  Female
                </label>
              </SexBox>
            </RadioGroupSex>
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
          <Label file>
            <LabelText>Load the pet&apos;s image</LabelText>

            <ImageCropper
              small
              avatar={avatar}
              setCroppedImageFor={setCroppedImageFor}
            ></ImageCropper>
            <FormError name="myPetsPhoto" />
          </Label>
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

          <ButtonBox>
            <Button type="submit" disabled={!isValid || !dirty}>
              Done
            </Button>
            <BackBtn type="button" onClick={() => prev(values)}>
              Back
            </BackBtn>
          </ButtonBox>
        </FormCustom>
      )}
    </Formik>
  );
};
