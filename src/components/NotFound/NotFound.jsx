import React from "react";
import {
  NotFoundDesc,
  NotFoundTitle,
  NotFoundText,
  NotFoundWrapper,
  ImgBox,
} from "./NotFound.styled";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>SORRY</NotFoundTitle>
      <NotFoundDesc>We couldn't find this page.</NotFoundDesc>
      <NotFoundText>
        Return to the <NavLink to="/">homepage</NavLink>
      </NotFoundText>
      <ImgBox>{/* <img src={DogImg} alt="dog" /> */}</ImgBox>
    </NotFoundWrapper>
  );
};

export default NotFound;
