import React from "react";
import { PetsData } from "../../components/PetsData/PetsData";
import MyInformationCard from "./MyInformationCard/MyInformationCard";
import { ContainerUserPage } from "./UserPage.styled";
import { useSelector } from "react-redux";
import { selectUsername } from "./../../redux/auth/auth-selectors";

const UserPage = () => {
  const user = useSelector(selectUsername);

  console.log("user", user);

  return (
    <>
      <ContainerUserPage>
        <MyInformationCard />
        <PetsData />
      </ContainerUserPage>
    </>
  );
};

export default UserPage;
