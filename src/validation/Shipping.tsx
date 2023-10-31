import * as Yup from "yup";

export const ShippingData_validation = Yup.object().shape({
  FullName: Yup.string()
    .required("Username is required")
    .min(3, "username must be at least 3 characters long")
    .max(20, "username must not exceed 20 characters"),

  city: Yup.string()
    .required("city name is required")
    .min(3, "city name must be at least 3 characters long")
    .max(15, "city name must not exceed 15 characters"),

  email: Yup.string()
    .trim()
    .email("Please enter valid email")
    .required("Email Address is Required"),

  HomeAddress: Yup.string()
    .required("Home address is required")
    .min(6, "Home address must be at least 6 characters long")
    .max(50, "Home address must not exceed 50 characters"),

  PostalCode: Yup.string()
    .required("Postal Code is required")
    .min(4, "Postal Code must be at least 4 digits")
    .max(4, "Postal Code must not be excedd from 4 digits"),
});
