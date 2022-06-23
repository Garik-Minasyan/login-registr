import { useState } from "react";
import { TextWrapperError } from "../pages/styles";
import validation from "../validation";
import { uploadFileValid } from "../validation";
import {
  LoginWrapper,
  FormWrapper,
  TextWrapper,
  InputWrapper,
  ButtonWrapper,
} from "./styles";

const Users = () => {
  interface OrderCategoriesProps {
    userName: string;
    trackingCode: string;
    price: string;
    orderDescription: string;
    id: number;
    uploadFile: any;
  }
  const [orderInfo, setOrderInfo] = useState({
    userName: "",
    trackingCode: "",
    price: "",
    orderDescription: "",
  });
  const [uploadFile, setUploadFile] = useState<any>("");
  const [errors, setErrors] = useState<any>("");
  const [errorsFile, setErrorsFile] = useState<any>("");
  const { userName, trackingCode, price, orderDescription } = orderInfo;

  let listOrders: OrderCategoriesProps[] = [];

  if (localStorage.getItem("orderList")) {
    listOrders = JSON.parse(localStorage.getItem("orderList") || "");
  }

  listOrders.push({
    userName: userName,
    trackingCode: trackingCode,
    price: price,
    orderDescription: orderDescription,
    uploadFile: uploadFile,
    id: new Date().getUTCMilliseconds(),
  });

  const imageHandler = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUploadFile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    setErrors(validation(orderInfo));
    setErrorsFile(uploadFileValid(uploadFile));
    if (
      !errors.userName &&
      userName &&
      !errors.trackingCode &&
      trackingCode &&
      !errors.price &&
      price &&
      !errors.orderDescription &&
      orderDescription &&
      !errorsFile &&
      uploadFile
    ) {
      localStorage.setItem("orderList", JSON.stringify(listOrders));
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
        {errors.userName && (
          <TextWrapperError>{errors.userName}</TextWrapperError>
        )}

        <InputWrapper
          type="text"
          value={trackingCode}
          placeholder="tracking Code"
          name="trackingCode"
          onChange={(e) => onInputChange(e)}
        />
        {errors.trackingCode && (
          <TextWrapperError>{errors.trackingCode}</TextWrapperError>
        )}

        <InputWrapper
          value={price}
          type="number"
          placeholder="price"
          name="price"
          onChange={(e) => onInputChange(e)}
        />
        {errors.price && <TextWrapperError>{errors.price}</TextWrapperError>}

        <InputWrapper
          value={orderDescription}
          type="text"
          name="orderDescription"
          placeholder="order Description"
          onChange={(e) => onInputChange(e)}
        />
        {errors.orderDescription && (
          <TextWrapperError>{errors.orderDescription}</TextWrapperError>
        )}

        <img
          style={{ width: "100px", marginTop: "10px", marginBottom: "10px" }}
          src={uploadFile}
          alt=""
        />
        <input
          type="file"
          accept="image/*"
          name="image-upload"
          onChange={imageHandler}
        />
        {errorsFile && <TextWrapperError>{errorsFile}</TextWrapperError>}

        <ButtonWrapper>Add</ButtonWrapper>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Users;
