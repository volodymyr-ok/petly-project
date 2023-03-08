import React, { useEffect, useState } from "react";
import { PetsData } from "../../components/PetsData/PetsData";
import MyInformationCard from "../../components/MyInformationCard/MyInformationCard";
import { BoxCards, ContainerUserPage, ErrorText } from "./UserPage.styled";
import { PawsLoader } from "../../components/Loader/PawsLoader/PawsLoader";
import { PrivateApi } from "../../http/http";
import { removePet, editPet, editPetAvatar, addPets } from "./services";
import { selectIsLoading } from "../../redux/user/user-selections";

const UserPage = () => {
  const [user, setUser] = useState({});
  const [pets, setPets] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPets, setIsLoadingPets] = useState(false);

  const FetchUserData = async () => {
    const data = await PrivateApi.get(
      "https://petly-2v85.onrender.com/api/users/profile"
    );
    return data;
  };
  const approveRemoveFunk = (id) => {
    setIsLoadingPets(true);
    removePet(id)
      .then(() => FetchUserData())
      .then((data) => {
        setPets(data.data?.pets);
        setIsLoadingPets(false);
      })
      .catch((error) => {
        setIsError(error);
        setIsLoadingPets(false);
      });
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

  const handlerEditModal = (arrayOfData) => {
    if (arrayOfData.length) {
      setIsLoadingPets(true);
      editPet(arrayOfData)
        .then(() => editPetAvatar(arrayOfData))
        .then(() => FetchUserData())
        .then((data) => {
          setPets(data.data?.pets);
          setIsLoadingPets(false);
        })
        .catch((error) => {
          setIsError(error);
          setIsLoadingPets(false);
        });
    } else {
      setIsLoadingPets(true);
      addPets(arrayOfData)
        .then(() => FetchUserData())
        .then((data) => {
          setPets(data.data?.pets);
          setIsLoadingPets(false);
        })
        .catch((error) => {
          setIsError(error);
          setIsLoadingPets(false);
        });
    }
  };

  return (
    <>
      <ContainerUserPage>
        {!isLoading || !selectIsLoading ? (
          <BoxCards>
            <MyInformationCard user={user} />
            <PetsData
              isLoadingPets={isLoadingPets}
              pets={pets}
              onEdit={handlerEditModal}
              onRemove={(id) => approveRemoveFunk(id)}
            />
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
