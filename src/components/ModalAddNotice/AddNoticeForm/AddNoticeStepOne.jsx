import { Field } from "formik";
import {
  Input,
  Label,
  SubTitle,
  LabelText,
  RadioLabel,
  RadioGroup,
  RadioBox,
} from "../ModalAddNotice.styled";
import { FormError } from "../../AuthForms/LoginForm/LoginForm";
import { useState } from "react";

export const AddNoticeStepOne = ({ values, error }) => {
  //   const [category, setCategory] = useState("sell");
  //   const listCategories = ["lost-found", "in good hands", "sell"];

  //   const handleClick = (e) => {
  //     console.log("click", e.target.textContent);
  //     setCategory(e.target.textContent);
  //   };

  return (
    <>
      <SubTitle>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </SubTitle>
      <RadioGroup role="group" aria-labelledby="my-radio-group">
        <RadioBox>
          <Field
            type="radio"
            name="categoryName"
            checked={values.categoryName === "lost-found"}
            value="lost-found"
            id="lost-found"
          />
          <RadioLabel for="lost-found">lost-found</RadioLabel>
        </RadioBox>
        <RadioBox>
          <Field
            type="radio"
            name="categoryName"
            checked={values.categoryName === "in-good-hands"}
            value="in-good-hands"
            id="in-good-hands"
          />
          <RadioLabel for="in-good-hands">in-good-hands</RadioLabel>
        </RadioBox>
        <RadioBox>
          <Field
            type="radio"
            name="categoryName"
            checked={values.categoryName === "sell"}
            value="sell"
            id="sell"
          />
          <RadioLabel for="sell">sell</RadioLabel>
        </RadioBox>
      </RadioGroup>
      <FormError name="categoryName" checked />

      <Label>
        <LabelText>
          Tittle of ad<span>*</span>
        </LabelText>
        <Input name="title" type="text" placeholder="Type name pet" />
        <FormError name="title" />
      </Label>
      <Label>
        <LabelText>Name pet</LabelText>
        <Input name="name" type="text" placeholder="Type name pet" />
        <FormError name="name" />
      </Label>
      <Label>
        <LabelText>Date of birth</LabelText>
        <Input name="birthday" type="text" placeholder="Type date of birth" />
        <FormError name="birthday" />
      </Label>
      <Label>
        <LabelText>Breed</LabelText>
        <Input name="breed" type="text" placeholder="Type breed" />
        <FormError name="breed" />
      </Label>
    </>
  );
};
