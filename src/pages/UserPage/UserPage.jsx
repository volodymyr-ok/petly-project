import React, { useEffect, useState } from "react";
import { PetsData } from "./PetsData/PetsData";
import MyInformationCard from "./MyInformationCard/MyInformationCard";
import { ContainerUserPage, ErrorText, BoxCards } from "./UserPage.styled";
import { PawsLoader } from "../../components/Loader/PawsLoader/PawsLoader";
// import axios from "axios";
import { PrivateApi } from "../../http/http";

const UserPage = () => {
  const [user, setUser] = useState({});
  const [pets, setPets] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  console.log("user", user, pets);

  const FetchUserData = async () => {
    const data = await PrivateApi.get(
      "https://petly-2v85.onrender.com/api/users/profile"
    );

    return data;
  };

  useEffect(() => {
    setIsLoading(true);
    FetchUserData()
      .then((data) => {
        setUser(data.data?.user);
        setPets(data.data?.pets);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <ContainerUserPage>
        {!isLoading ? (
          <BoxCards>
            <MyInformationCard user={user} />
            <PetsData pets={pets} />
          </BoxCards>
        ) : (
          <PawsLoader />
        )}
        {isError && <ErrorText>{isError}</ErrorText>}
      </ContainerUserPage>
    </>
  );
};

export default UserPage;
