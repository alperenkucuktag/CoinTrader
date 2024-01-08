import React from "react";
import { useFormik } from "formik";
import InputField from "../InputField";
import { inputs } from "../constant";
import { schema } from "../schema";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Auth = () => {
  const navigate = useNavigate();
  //useFormik > formik özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    //formda tututlucak verileri belirler
    initialValues: {
      email: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, actions) => {
      localStorage.setItem("user", values);
      //   console.log(values);
      //*bütün value'ları sıfırlar
      actions.resetForm();
      navigate("/home");
      toast.success("Kayıt ve Giriş Tamamlandı", {
        autoClose: 700,
      });
    },

    //doğrulama şeması :todo

    validationSchema: schema,
  });
  // console.log(formik);

  return (
    <>
      <div className='auth-page'>
        <div className='container'>
          <h2 className='d-flex gap-3 justify-content-center align-items-center  text-center my-5'>
            <img height={60} src='/public/coin.png' alt='' />
          </h2>

          {/* Form Alanı */}
          <form onSubmit={formik.handleSubmit}>
            {inputs.map((data, index) => (
              <InputField key={index} formik={formik} data={data} />
            ))}
            <button type='submit'>Kaydol</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Auth;
