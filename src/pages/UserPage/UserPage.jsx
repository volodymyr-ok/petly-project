import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/auth-selectors";
import MyInformationCard from "./MyInformationCard/MyInformationCard";
import { ContainerUserPage } from "./UserPage.styled";

const UserPage = () => {
  const user = useSelector(selectUser);

  console.log("user", user);

  return (
    <ContainerUserPage>
      <MyInformationCard />
    </ContainerUserPage>
  );
};

export default UserPage;
