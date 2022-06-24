import styled from "styled-components";
import { globalColor, globalColorRed, globalFamily } from "../../globalStyles";

export const HomeWrapper = styled.div`
  padding: 15px;
  margin-top: 50px;
`;

export const HomeTextWrapper = styled.p`
  color: ${globalColorRed};
  font-size: 35px;
  font-family: ${globalFamily};
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
  border-radius: 5px;
  height: 40px;
  width: 150px;
  border: none;
  cursor: pointer;
  transition: 0.6s all ease;
  &:hover {
    background-color: #5dba2f;
    color: white;
  }
`;

export const TextWrapperError = styled.p`
  color: ${globalColorRed};
  font-size: 16px;
  margin-bottom: 5px;
  padding: 0;
  font-family: ${globalFamily};
  width: 355px;
`;

export const HeaderImage = styled.img`
  width: 100px;
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

export const TextWrapper = styled.p`
  color: ${globalColor};
  font-size: 35px;
  font-family: ${globalFamily};
  font-weight: 700;
  letter-spacing: 5px;
  font-size: 40px;
  font-family: fangsong;
`;
