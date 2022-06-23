interface ErrorsCategoriesProps {
  name: string;
  password: string;
  email: string;
  phone: string;
  role: string;
}

const validation = (values: any) => {
  let errors: ErrorsCategoriesProps = {
    name: "",
    password: "",
    email: "",
    phone: "",
    role: "",
  };

  if (!values.email) {
    errors.email = "email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "email is invalid";
  }

  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.length < 6) {
    errors.password = "password must be more than 6 characters";
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

  return errors;
};

export default validation;
