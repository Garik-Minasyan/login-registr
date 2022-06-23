import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "../validation";
import loginImage from "../assets/images/register.svg";
import {
  LoginWrapper,
  FormWrapper,
  TextWrapper,
  InputWrapper,
  ButtonWrapper,
  TextWrapperError,
} from "./styles";

interface CurrentUser {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<any>({});
  const [currentValues, setCurrentValues] = useState<CurrentUser>({
    email: "",
    password: "",
  });

  const currentUsers = JSON.parse(
    localStorage.getItem("registeredUsersList") || ""
  );
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validation(currentValues));

    currentUsers.filter((currentUser: CurrentUser) => {
      if (
        currentUser.email === currentValues.email &&
        currentUser.password === currentValues.password
      ) {
        navigate("/");
        localStorage.setItem(
          "currentUser",
          JSON.stringify(currentValues.email)
        );
      } else {
        alert(
          "No users found Please register to log in ...! Wrong email or password "
        );
      }
    });
  };

  const handleChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValues({
      ...currentValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <LoginWrapper>
      <img style={{ width: "700px" }} src={loginImage} alt="jpg" />
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
