import React from "react";
import MyInformationCard from "./MyInformationCard/MyInformationCard";
import { ContainerUserPage } from "./UserPage.styled";

const UserPage = () => {
  return (
    <ContainerUserPage>
      <MyInformationCard />
    </ContainerUserPage>
  );
};

export default UserPage;
