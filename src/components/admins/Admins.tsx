import { useEffect, useState } from "react";
import {
  OrderListWrappper,
  DeleteiconWrapper,
  NoOrdersWrapper,
  AdminImage,
  OrderListTitle,
  OrderList,
} from "./styles";
import { FaTrashAlt } from "react-icons/fa";
import { OrderCategoriesProps } from "../../types";

const Admins = () => {
  const [orderLists, setOrderLists] = useState([]);

  useEffect(() => {
    const orderListFromStorage: string | null =
      localStorage.getItem("orderList");
    if (orderListFromStorage) {
      setOrderLists(JSON.parse(orderListFromStorage));
    }
  }, []);

  const deleteOrder = (element: number) => {
    const userExist = orderLists.filter(
      (e: OrderCategoriesProps) => e.id !== element
    );
    localStorage.setItem("orderList", JSON.stringify(userExist));
    setOrderLists(userExist);
  };
  return (
    <div>
      {orderLists.length > 0 ? (
        orderLists?.map((orderList: OrderCategoriesProps) => (
          <OrderListWrappper key={orderList.id}>
            <OrderList>
              <OrderListTitle>user name : {orderList.userName}</OrderListTitle>
              <OrderListTitle>
                Description : {orderList.orderDescription}
              </OrderListTitle>
              <OrderListTitle>Code : {orderList.trackingCode}</OrderListTitle>
              <OrderListTitle>Price : {orderList.price}</OrderListTitle>
              <OrderListTitle>
                <AdminImage src={orderList.uploadFile} alt="png" />
              </OrderListTitle>
            </OrderList>

            <DeleteiconWrapper onClick={() => deleteOrder(orderList.id)}>
              <FaTrashAlt />
            </DeleteiconWrapper>
          </OrderListWrappper>
        ))
      ) : (
        <NoOrdersWrapper>No Orders</NoOrdersWrapper>
      )}
    </div>
  );
};

export default Admins;
