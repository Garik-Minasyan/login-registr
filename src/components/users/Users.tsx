import { useEffect, useState } from "react";
import { TextWrapperError } from "../../pages/register/styles";
import validation from "../../validation";
import { OrderCategoriesProps, ErrorsCategoriesProps } from "../../types";
import { uploadFileValid } from "../../validation";
import {
  LoginWrapper,
  FormWrapper,
  TextWrapper,
  InputWrapper,
  ButtonWrapper,
  UploadImage,
} from "./styles";

const Users = () => {
  const [orderInfo, setOrderInfo] = useState({
    userName: "",
    trackingCode: "",
    price: "",
    orderDescription: "",
  });
  const [uploadFile, setUploadFile] = useState<string>("");
  const [errors, setErrors] = useState<ErrorsCategoriesProps>({});
  const [errorsFile, setErrorsFile] = useState<string>("");
  const [listOrders, setListOrders] = useState<OrderCategoriesProps[]>([]);
  const { userName, trackingCode, price, orderDescription } = orderInfo;

  useEffect(() => {
    const orderListFromStorage: string | null =
      localStorage.getItem("orderList");
    if (orderListFromStorage) {
      setListOrders(JSON.parse(orderListFromStorage));
    }
  }, []);

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string" && reader.readyState === 2) {
        setUploadFile(reader.result);
      }
    };
    e?.target?.files?.[0] && reader.readAsDataURL(e.target.files[0]);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validation(orderInfo));
    listOrders.push({
      userName: userName,
      trackingCode: trackingCode,
      price: price,
      orderDescription: orderDescription,
      uploadFile: uploadFile,
      id: new Date().getUTCMilliseconds(),
    });
    typeof uploadFile === "string" &&
      setErrorsFile(uploadFileValid(uploadFile));
    const hasError = Object.keys(errors).some((error) => error in errors);
    if (
      !hasError &&
      userName &&
      trackingCode &&
      price &&
      orderDescription &&
      !errorsFile &&
      uploadFile
    ) {
      localStorage.setItem("orderList", JSON.stringify(listOrders));
      setOrderInfo({
        userName: "",
        trackingCode: "",
        price: "",
        orderDescription: "",
      });
      setUploadFile("");
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
        <UploadImage src={uploadFile} alt="" />
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
