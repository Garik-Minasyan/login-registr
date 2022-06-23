import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "../validation";
import personeImg from "./../assets/images/personage.png";
import {
  LoginWrapper,
  FormWrapper,
  TextWrapper,
  InputWrapper,
  ButtonWrapper,
  InputRadioWrapper,
  LabelWrapper,
  TextWrapperError,
} from "./styles";

const Registration = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
  });
  const [role, setRole] = useState("admin");
  const [errors, setErrors] = useState<any>({});

  let listRegUsers: any[] = [];
  const { name, password, email, phone } = userInfo;

  if (localStorage.getItem("registeredUsersList")) {
    listRegUsers = JSON.parse(
      localStorage.getItem("registeredUsersList") || ""
    );
  }

  listRegUsers.push({
    name: name,
    password: password,
    email: email,
    phone: phone,
    role: role,
    id: new Date().getUTCMilliseconds(),
  });

  // const isEmailExist = (userInfo.email, listRegUsers) => {
  //   listRegUsers.some((user:any) => user.email === userInfo.email)

  // }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validation(userInfo));

    if (
      !errors.name &&
      name &&
      !errors.email &&
      email &&
      !errors.password &&
      password &&
      !errors.phone &&
      phone &&
      !errors.role &&
      role
    ) {
      navigate("/login");
      localStorage.setItem("registeredUsersList", JSON.stringify(listRegUsers));
    }
  };

  const handleChackRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.name);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <LoginWrapper>
      <img style={{ width: "700px" }} src={personeImg} alt="png" />
      <FormWrapper onSubmit={handleFormSubmit}>
        <TextWrapper>
          Registeration
          <ButtonWrapper onClick={() => navigate("/login")}>
            Go Login ?
          </ButtonWrapper>
        </TextWrapper>
        <InputWrapper
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
        />
        {errors.name && <TextWrapperError>{errors.name}</TextWrapperError>}
        <InputWrapper
          type="email"
          value={email}
          placeholder="email"
          name="email"
          onChange={(e) => onInputChange(e)}
        />
        {errors.email && <TextWrapperError>{errors.email}</TextWrapperError>}
        <InputWrapper
          value={password}
          type="password"
          placeholder="password"
          autoComplete="on"
          name="password"
          onChange={(e) => onInputChange(e)}
        />
        {errors.password && (
          <TextWrapperError>{errors.password}</TextWrapperError>
        )}
        <InputWrapper
          value={phone}
          type="number"
          name="phone"
          placeholder="phone number"
          onChange={(e) => onInputChange(e)}
        />
        {errors.phone && <TextWrapperError>{errors.phone}</TextWrapperError>}
        <div>
          <LabelWrapper>Admin</LabelWrapper>
          <InputRadioWrapper
            type="radio"
            value={role}
            name="admin"
            onChange={(e) => handleChackRadio(e)}
            checked={role === "admin"}
          />

          <LabelWrapper>User</LabelWrapper>
          <InputRadioWrapper
            type="radio"
            value={role}
            name="user"
            onChange={(e) => handleChackRadio(e)}
            checked={role === "user"}
          />
          <ButtonWrapper type="submit">Register</ButtonWrapper>
        </div>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Registration;
