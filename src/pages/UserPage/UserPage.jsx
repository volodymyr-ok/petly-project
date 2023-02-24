import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/auth-selectors";

const UserPage = () => {
  const user = useSelector(selectUser);

  console.log("yser", user);

  return (
    <>
      <div>UserPage</div>
    </>
  );
};

export default UserPage;
