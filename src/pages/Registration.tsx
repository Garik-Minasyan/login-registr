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

interface RegisteredUsersList {
  data: Array<Type>;
}
interface Type {
  name: string;
  password: string;
  email: string;
  phone: string;
  role: string;
}

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

  let registeredUsersList: any[] = [];
  const { name, password, email, phone } = userInfo;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    registeredUsersList.push({
      name: name,
      password: password,
      email: email,
      phone: phone,
      role: role,
      id: new Date().getUTCMilliseconds(),
    });
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
      localStorage.setItem(
        "registeredUsersList",
        JSON.stringify([
          ...registeredUsersList,
          {
            name: name,
            password: password,
            email: email,
            phone: phone,
            role: role,
            id: new Date().getUTCMilliseconds(),
          },
        ])
      );
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
        <TextWrapper>Registeration</TextWrapper>
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
