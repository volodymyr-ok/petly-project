import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/auth-selectors";

const UserPage = () => {
  const user = useSelector(selectUser);

  console.log("user", user);

  return (
    <>
      <div>UserPage</div>
    </>
  );
};

export default UserPage;
