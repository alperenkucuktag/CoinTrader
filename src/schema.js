import * as yup from "yup";
//1 küçük harf
//1 büyük harf
//1 sayı
//1 özel karakter
//minimum 5 karakter
const regex = "^(?=.*[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";
export const schema = yup.object().shape({
  //email için zorunluluklar
  email: yup
    .string()
    .email("Lütfen Bir Email gir")
    .required("Email alanı gereklidir"),
  //yaş için zorunluluklar
  age: yup
    .number()
    .min(18, "18 yaşından büyük olmalı")
    .max(100, "100 yaşından büyük olamaz")
    .integer(),
  password: yup
    .string()
    .min(5, "Şifre en az 5 Karakter olmalı")
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Şifre alanı zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Onay şifreniz doğru değil")
    .required("Şifrenizi onaylayın"),
});
