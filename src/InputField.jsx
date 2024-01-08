import React from "react";

const InputField = ({ formik, data }) => {
  const { label, name, type } = data;
  // console.log(name);
  // console.log(formik.errors);
  return (
    <div>
      <label>{label}</label>
      <input
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        type={type}
      />
      {/* Hata varsa ve inputu dokunulduysa hatayı göster */}
      {formik.errors[name] && formik.touched[name] && (
        <span>{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default InputField;
