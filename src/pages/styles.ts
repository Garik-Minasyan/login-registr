import styled from "styled-components";
import { globalColor, globalFamily } from "../globalStyles";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const FormWrapper = styled.form`
  width: 28%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 50px;
`;

export const TextWrapper = styled.p`
  color: ${globalColor};
  font-size: 35px;
  font-family: ${globalFamily};
`;

export const InputWrapper = styled.input`
  font-family: ${globalFamily};
  width: 350px;
  height: 40px;
  margin-top: 8px;
`;
export const InputRadioWrapper = styled.input`
  color: ${globalColor};
  font-family: ${globalFamily};
`;
export const LabelWrapper = styled.label`
  color: #5dba2f;
  font-family: ${globalFamily};
  margin-left: 40px;
`;

export const ButtonWrapper = styled.button`
  color: ${globalColor};
  font-family: ${globalFamily};
  height: 40px;
  width: 150px;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  margin-top: 30px;
`;

export const HomeWrapper = styled.div`
  padding: 15px;
  margin-top: 50px;
`;

export const HomeHeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

export const AvatarWrapper = styled.div`
  color: ${globalColor};
  font-family: ${globalFamily};
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const LogOutWrapper = styled.button`
  color: ${globalColor};
  font-family: ${globalFamily};
  height: 40px;
  width: 150px;
  border: none;
  cursor: pointer;
`;

export const TextWrapperError = styled.p`
  color: red;
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-family: ${globalFamily};
`;
