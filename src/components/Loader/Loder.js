import React from "react";
import {
  // LoaderBody,
  LoaderWrapper,
} from "./Loader.styled";
import { PawContainer } from "./PawsLoader/PawsLoader.styled";
import paw from "../../assets/svg/paw-icon.svg";

export const Loader = ({ isLoading }) => {
  console.log("isLoadin", isLoading);
  return (
    <>
      <LoaderWrapper disable={isLoading}>
        {/* <LoaderBody></LoaderBody> */}
        <PawContainer>
          <div>
            <img src={paw} alt="" />
          </div>
          <div>
            <img src={paw} alt="" />
          </div>
          <div>
            <img src={paw} alt="" />
          </div>
          <div>
            <img src={paw} alt="" />
          </div>
          <div>
            <img src={paw} alt="" />
          </div>
          <div>
            <img src={paw} alt="" />
          </div>
        </PawContainer>
      </LoaderWrapper>
    </>
  );
};
