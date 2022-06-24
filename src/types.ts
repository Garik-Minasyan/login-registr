export type OrderCategoriesProps = {
  userName: string;
  trackingCode: string;
  price: string;
  orderDescription: string;
  id: number;
  uploadFile: string;
};

export type CurrentUserEmail = {
  email: string;
};

export type CurrentUserEmailPassword = {
  email: string;
  password: string;
};

export type UserType = {
  name: string;
  password: string;
  email: string;
  phone: string;
  role: string;
  id: number;
};

export type ErrorsCategoriesProps = {
  name?: string;
  password?: string;
  email?: string;
  phone?: string;
  role?: string;
  userName?: string;
  trackingCode?: string;
  price?: string;
  orderDescription?: string;
  uploadFile?: string;
  src?: string;
};

export type CurrentUser = {
  email: string;
};
