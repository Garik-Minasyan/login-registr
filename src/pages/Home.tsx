import { useNavigate } from "react-router-dom";
import Admins from "../components/Admins";
import Users from "../components/Users";
import onexLogo from "../assets/images/onex-logo.svg";
import {
  HomeHeaderWrapper,
  HomeWrapper,
  AvatarWrapper,
  LogOutWrapper,
} from "./styles";

const Home = () => {
  const navigate = useNavigate();
  const currentUsersList = JSON.parse(
    localStorage.getItem("registeredUsersList") || ""
  );
  const currentUserEmail = JSON.parse(
    localStorage.getItem("currentUser") || ""
  );

  const currentUser = currentUsersList.filter(
    (elem: any) => elem.email === currentUserEmail
  );

  const handleLogOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  console.log(currentUser, "currentUsers");
  return (
    <HomeWrapper>
      <HomeHeaderWrapper>
        <div>
          <img style={{ width: "100px" }} src={onexLogo} alt="svg" />
        </div>
        <AvatarWrapper>
          {currentUser[0].role} {currentUser[0].name}
        </AvatarWrapper>
        <LogOutWrapper onClick={handleLogOut}>Log Out</LogOutWrapper>
      </HomeHeaderWrapper>
      {currentUser[0].role === "admin" ? <Admins /> : <Users />}
    </HomeWrapper>
  );
};

export default Home;
