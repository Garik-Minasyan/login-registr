interface ErrorsCategoriesProps {
  name: string;
  password: string;
  email: string;
  phone: string;
  role: string;
  userName: string;
  trackingCode: string;
  price: string;
  orderDescription: string;
  uploadFile: string;
}

export const uploadFileValid = (uploadFile: string) => {
  let error: string = "";
  if (!uploadFile) {
    error = "upload File is required";
  }
  return error;
};

const validation = (values: any) => {
  let errors: ErrorsCategoriesProps = {
    name: "",
    password: "",
    email: "",
    phone: "",
    role: "",
    userName: "",
    trackingCode: "",
    price: "",
    orderDescription: "",
    uploadFile: "",
  };

  if (!values.email) {
    errors.email = "email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "email is invalid";
  }

  if (!values.password) {
    errors.password = "password is required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(values.password)
  ) {
    errors.password =
      "Minimum 8 characters, at least 1 uppercase & 1 lowercase letter and 1 number";
  }

  if (!values.name) {
    errors.name = "name is required";
  } else if (values.name.length > 10) {
    errors.name = "name must be more than 10 characters";
  }

  if (!values.phone) {
    errors.phone = "phone is required";
  } else if (values.phone.length > 8) {
    errors.phone = "phone must be more than 8 characters";
  }

  if (!values.userName) {
    errors.userName = "user Name is required";
  } else if (values.userName.length > 10) {
    errors.userName = "user Name must be more than 10 characters";
  }

  if (!values.trackingCode) {
    errors.trackingCode = "tracking Code is required";
  } else if (values.trackingCode.length < 5) {
    errors.trackingCode = "tracking Code must be more than 5 characters";
  }

  if (!values.price) {
    errors.price = "price is required";
  } else if (values.price.length > 7) {
    errors.price = "price must be more than 7 characters";
  }

  if (!values.orderDescription) {
    errors.orderDescription = "order Description is required";
  } else if (values.orderDescription.length > 20) {
    errors.orderDescription =
      "order Description must be more than 20 characters";
  }
  return errors;
};

export default validation;
