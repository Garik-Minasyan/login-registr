import styled from "styled-components";
import { globalColor, globalFamily } from "../../globalStyles";

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
  height: 50px;
  margin-top: 8px;
  outline: none;
  border: none;
  padding: 0 5px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &::placeholder {
    color: #e1e3e3;
  }
`;

export const ButtonWrapper = styled.button`
  color: ${globalColor};
  background-color: #f2efef;
  font-family: ${globalFamily};
  height: 40px;
  width: 150px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  margin-top: 30px;
  transition: 0.6s all ease;
  &:hover {
    background-color: #5dba2f;
    color: white;
  }
`;

export const UploadImage = styled.img`
  width: 150px;
  margin: 10px 0 10px 0;
`;
