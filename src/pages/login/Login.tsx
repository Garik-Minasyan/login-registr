import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "../../validation";
import loginImage from "../../assets/images/register.svg";
import { CurrentUserEmailPassword, ErrorsCategoriesProps } from "../../types";
import {
  LoginWrapper,
  FormWrapper,
  TextWrapper,
  InputWrapper,
  ButtonWrapper,
  TextWrapperError,
  LoginImage,
} from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<ErrorsCategoriesProps>({});
  const [currentUsers, setCurrentUsers] = useState([]);
  const [currentValues, setCurrentValues] = useState<CurrentUserEmailPassword>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const usersFromStorage: string | null = localStorage.getItem(
      "registeredUsersList"
    );
    if (usersFromStorage) {
      setCurrentUsers(JSON.parse(usersFromStorage));
    }
  }, []);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validation(currentValues));
    const userExist = currentUsers.some(
      (currentUser: CurrentUserEmailPassword) =>
        currentUser.email === currentValues.email &&
        currentUser.password === currentValues.password
    );
    if (userExist) {
      localStorage.setItem("currentUser", JSON.stringify(currentValues.email));
      navigate("/");
    } else {
      alert("No users found, please register or wrong email or password");
    }
  };

  const handleChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValues({
      ...currentValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <LoginWrapper>
      <LoginImage src={loginImage} alt="jpg" />
      <FormWrapper onSubmit={handleLogin}>
        <TextWrapper>LogIn</TextWrapper>
        <InputWrapper
          type="email"
          placeholder="Enter email"
          onChange={handleChnage}
          name="email"
          value={currentValues.email}
        />
        {errors.email && <TextWrapperError>{errors.email}</TextWrapperError>}
        <InputWrapper
          type="password"
          placeholder="Enter password"
          onChange={handleChnage}
          name="password"
          autoComplete="current-password"
          value={currentValues.password}
        />
        {errors.password && (
          <TextWrapperError>{errors.password}</TextWrapperError>
        )}
        <div>
          <ButtonWrapper type="submit">Login</ButtonWrapper>
          <ButtonWrapper onClick={() => navigate("/registration")}>
            New Account ?
          </ButtonWrapper>
        </div>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Login;
