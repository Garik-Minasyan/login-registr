import { useNavigate } from "react-router-dom";
import Admins from "../components/Admins";
import Users from "../components/Users";
import onexLogo from "../assets/images/onex-logo.svg";
import {
  HomeHeaderWrapper,
  HomeWrapper,
  AvatarWrapper,
  LogOutWrapper,
  ButtonWrapper,
  TextWrapper,
  HomeTextWrapper,
} from "./styles";

interface CurrentUser {
  email: string;
}

const Home = () => {
  const navigate = useNavigate();
  let currentUsersList;
  let currentUserEmail: string;
  let currentUser;

  try {
    if (localStorage.getItem("currentUser")) {
      currentUserEmail = JSON.parse(localStorage.getItem("currentUser") || "");
    }
  } catch (error) {
    console.log(error, "Not a current user");
  }

  try {
    if (localStorage.getItem("registeredUsersList")) {
      currentUsersList = JSON.parse(
        localStorage.getItem("registeredUsersList") || ""
      );
      currentUser = currentUsersList?.filter(
        (elem: CurrentUser) => elem.email === currentUserEmail
      );
    }
  } catch (error) {
    console.log(error, "Not a registered user");
  }

  const handleLogOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  return (
    <>
      {!currentUser ? (
        <div>
          <HomeTextWrapper>
            To access this page, please register and then log in. Sincerely,
            Onex ...!
          </HomeTextWrapper>
          <TextWrapper>
            Should we go to register ?
            <ButtonWrapper onClick={() => navigate("/registration")}>
              Go
            </ButtonWrapper>
          </TextWrapper>
        </div>
      ) : (
        <HomeWrapper>
          <HomeHeaderWrapper>
            <div>
              <img style={{ width: "100px" }} src={onexLogo} alt="svg" />
            </div>
            <AvatarWrapper>
              {currentUser && currentUser[0]?.role} :
              {currentUser && currentUser[0]?.name}
            </AvatarWrapper>
            <LogOutWrapper onClick={handleLogOut}>Log Out</LogOutWrapper>
          </HomeHeaderWrapper>
          {currentUser && currentUser[0]?.role === "admin" ? (
            <Admins />
          ) : (
            <Users />
          )}
        </HomeWrapper>
      )}
    </>
  );
};

export default Home;
