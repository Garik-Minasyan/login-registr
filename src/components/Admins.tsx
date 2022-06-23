import { OrderListWrappper, DeleteiconWrapper } from "./styles";
import { FaTrashAlt } from "react-icons/fa";

interface CurrentUser {
  id: null | undefined;
  userName: string;
  orderDescription: string;
  trackingCode: string;
  uploadFile: string;
  price: string;
}

const Admins = () => {
  const orderLists = JSON.parse(localStorage.getItem("orderList") || "");

  return (
    <div>
      {orderLists &&
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
        })}
    </div>
  );
};

export default Admins;
