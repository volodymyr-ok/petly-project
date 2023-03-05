import React, { useEffect, useState } from "react";
import { PetsData } from "../../components/PetsData/PetsData";
import MyInformationCard from "../../components/MyInformationCard/MyInformationCard";
import { BoxCards, ContainerUserPage, ErrorText } from "./UserPage.styled";
import { PawsLoader } from "../../components/Loader/PawsLoader/PawsLoader";
// import axios from "axios";
import { PrivateApi } from "../../http/http";
import { removePet,editPet, editPetAvatar  } from "./services";

const UserPage = () => {
  const [user, setUser] = useState({});
  const [pets, setPets] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);

  const FetchUserData = async () => {
    const data = await PrivateApi.get(
      "https://petly-2v85.onrender.com/api/users/profile"
    );

    return data;
  };
  const approveRemoveFunk =(id)=>{
    setIsLoading(true)
    removePet(id)
    .then(()=>{
      setReload(!reload)
      // setIsLoading(false)
    })
    .catch((error)=>{
      setIsError(error);
      setIsLoading(false);
    })
  }

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
  }, [reload]);

  const handlerEditModal = (id) => {
    setIsLoading(true);
    editPet(id)
      .then(() => editPetAvatar(id))
      .then(() => {
        // setIsLoading(false);
        setReload(!reload)
      })
      .catch((error) => {
        setIsError(error);
        setIsLoading(false);
      });
  };

  return (
    <>
      <ContainerUserPage>
        {!isLoading ? (
          <BoxCards>
            <MyInformationCard user={user} />
            <PetsData pets={pets} onEdit={(id)=>handlerEditModal(id)} onRemove={(id)=>approveRemoveFunk(id)}/>
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
