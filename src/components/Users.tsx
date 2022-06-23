import { useState } from "react";
import {
  LoginWrapper,
  FormWrapper,
  TextWrapper,
  InputWrapper,
  ButtonWrapper,
} from "./styles";

const Users = () => {
  const [orderInfo, setOrderInfo] = useState({
    userName: "",
    trackingCode: "",
    price: "",
    orderDescription: "",
  });

  interface OrderCategoriesProps {
    data: Array<Type>;
  }
  interface Type {
    userName: string;
    trackingCode: string;
    price: string;
    orderDescription: string;
  }

  const [uploadFile, setUploadFile] = useState<any>("");
  let orderList: OrderCategoriesProps[] = [];
  const { userName, trackingCode, price, orderDescription } = orderInfo;

  const imageHandler = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUploadFile({
          uploadFile: reader.result,
        });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (
      !userName ||
      !price ||
      !trackingCode ||
      !orderDescription ||
      !uploadFile.uploadFile
    ) {
      console.log(" stex alert cuyc tal");
    } else {
      localStorage.setItem(
        "orderList",
        JSON.stringify([
          ...orderList,
          {
            userName: userName,
            trackingCode: trackingCode,
            price: price,
            orderDescription: orderDescription,
            uploadFile: uploadFile.uploadFile,
            id: new Date().getUTCMilliseconds(),
          },
        ])
      );
    }
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderInfo({ ...orderInfo, [event.target.name]: event.target.value });
  };

  return (
    <LoginWrapper>
      <FormWrapper onSubmit={handleFormSubmit}>
        <TextWrapper>Add New Order</TextWrapper>
        <InputWrapper
          type="text"
          placeholder="user name"
          name="userName"
          value={userName}
          onChange={(e) => onInputChange(e)}
        />
        <InputWrapper
          type="text"
          value={trackingCode}
          placeholder="tracking Code"
          name="trackingCode"
          onChange={(e) => onInputChange(e)}
        />
        <InputWrapper
          value={price}
          type="text"
          placeholder="price"
          name="price"
          onChange={(e) => onInputChange(e)}
        />
        <InputWrapper
          value={orderDescription}
          type="text"
          name="orderDescription"
          placeholder="order Description"
          onChange={(e) => onInputChange(e)}
        />

        <img
          style={{ width: "100px", marginTop: "10px", marginBottom: "10px" }}
          src={uploadFile.uploadFile}
          alt=""
        />
        <input
          type="file"
          accept="image/*"
          name="image-upload"
          onChange={imageHandler}
        />
        <ButtonWrapper>Add</ButtonWrapper>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Users;
