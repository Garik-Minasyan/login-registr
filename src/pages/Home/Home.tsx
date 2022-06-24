import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Admins from "../../components/admins/Admins";
import Users from "../../components/users/Users";
import onexLogo from "../../assets/images/onex-logo.svg";
import {
  HomeHeaderWrapper,
  HomeWrapper,
  AvatarWrapper,
  LogOutWrapper,
  ButtonWrapper,
  TextWrapper,
  HomeTextWrapper,
} from "./styles";
import { UserType, CurrentUser } from "../../types";

const Home = () => {
  const navigate = useNavigate();
  const [currentUserEmail, setCuurentUserEmail] = useState<string>("");
  const [currentUsersList, setCurrentUsersList] = useState<UserType[]>([]);

  useEffect(() => {
    const currentUserEmailFromLocalSt: string | null =
      localStorage.getItem("currentUser");
    if (currentUserEmailFromLocalSt) {
      setCuurentUserEmail(JSON.parse(currentUserEmailFromLocalSt));
    }
  }, []);

  useEffect(() => {
    const currentUserListFromLocalSt: string | null = localStorage.getItem(
      "registeredUsersList"
    );
    if (currentUserListFromLocalSt) {
      setCurrentUsersList(JSON.parse(currentUserListFromLocalSt));
    }
  }, []);

  const currentUser = currentUsersList?.filter(
    (elem: CurrentUser) => elem.email === currentUserEmail
  );

  const handleLogOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  return (
    <>
      {!currentUser.length || !currentUsersList.length ? (
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
              {`${currentUser && currentUser[0]?.role}: ${
                currentUser && currentUser[0]?.name
              }`}
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
