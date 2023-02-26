import React from "react";
import { LoaderBody, LoaderWrapper } from "./Loader.styled";

export const Loader = ({ isLoading }) => {
  return (
    <LoaderWrapper disable={isLoading}>
      <LoaderBody></LoaderBody>
    </LoaderWrapper>
  );
};
