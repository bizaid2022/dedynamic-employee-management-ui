import * as Yup from "yup";

const phoneRegEx = /^(\+95)?0?9[1-9][0-9]{5,8}$/i;
const emialRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const spaceRegEx = /^\S*$/;
const brandRegEx = /^[A-Z\s][A-Z\s][0-9][1-9]+$/;

export const employeeShcema = Yup.object().shape({
  name: Yup.string().required("This is a required field"),
  phoneNumber: Yup.string()
    .matches(phoneRegEx, "Invalid Phone Number")
    .required("This is a required field"),
  email: Yup.string()
    .matches(emialRegEx, "Invalid Email Address")
    .required("This is a required field"),
  nrcNumber: Yup.number()
    .required("Number is Required")
    .typeError("Number must be number"),
  experiences: Yup.array().of(
    Yup.object().shape({
      rank: Yup.string().required("This is a required field"),
      companyName: Yup.string().required("This is a required field"),
      reasonOfResign: Yup.string().required("This is a required field"),
    })
  ),
});
