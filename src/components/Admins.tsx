import {
  OrderListWrappper,
  DeleteiconWrapper,
  NoOrdersWrapper,
} from "./styles";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

interface CurrentUser {
  id: null | undefined;
  userName: string;
  orderDescription: string;
  trackingCode: string;
  uploadFile: string;
  price: string;
}

const Admins = () => {
  const [orderLists, setOrderLists] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("orderList")) {
      setOrderLists(JSON.parse(localStorage.getItem("orderList") || ""));
    }
  }, [orderLists]);

  return (
    <div>
      {orderLists.length > 0 ? (
        orderLists?.map((orderList: CurrentUser) => {
          return (
            <OrderListWrappper key={orderList.id}>
              <div>Name : {orderList.userName}</div>
              <div>Description : {orderList.orderDescription}</div>
              <div>Code : {orderList.trackingCode}</div>
              <div>Price : {orderList.price}</div>
              <div>
                <img
                  style={{ width: "100px" }}
                  src={orderList.uploadFile}
                  alt="png"
                />
              </div>
              <DeleteiconWrapper>
                <FaTrashAlt />
              </DeleteiconWrapper>
            </OrderListWrappper>
          );
        })
      ) : (
        <NoOrdersWrapper>No Orders</NoOrdersWrapper>
      )}
    </div>
  );
};

export default Admins;
