import React, { useEffect, useState } from "react";
import { PetsData } from "../../components/PetsData/PetsData";
import MyInformationCard from "../../components/MyInformationCard/MyInformationCard";
import { BoxCards, ContainerUserPage, ErrorText } from "./UserPage.styled";
import { PawsLoader } from "../../components/Loader/PawsLoader/PawsLoader";
// import axios from "axios";
import { PrivateApi } from "../../http/http";

const UserPage = () => {
  const [user, setUser] = useState({});
  const [pets, setPets] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  console.log("pets", pets);

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
        console.log("data", data);

        setUser(data.data?.user);
        setPets(data.data?.pets);
        setIsLoading(false);

        // if (data.data.pets === null) {
        //   setPets([]);
        //   return;
        // }
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
