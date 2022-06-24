import styled from "styled-components";
import { globalFamily, globalColorRed } from "../../globalStyles";

export const NoOrdersWrapper = styled.p`
  color: ${globalColorRed};
  font-size: 35px;
  font-family: ${globalFamily};
  display: flex;
  justify-content: center;
  margin-right: 40px;
`;

export const OrderListWrappper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 70px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  padding: 7px;
`;

export const OrderListTitle = styled.div`
  @media (max-width: 1000px) {
    margin-top: 8px;
  }
`;

export const OrderList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 1000px;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DeleteiconWrapper = styled.button`
  color: ${globalColorRed};
  font-family: ${globalFamily};
  height: 40px;
  width: 150px;
  border: none;
  cursor: pointer;
`;

export const AdminImage = styled.img`
  width: 100px;
`;
