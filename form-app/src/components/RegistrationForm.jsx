import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    bod: "",
  });

  const formFields = [
    {
      label: "First Name :",
      name: "name",
      type: "text",
      placeholder: "Enter Your First Name",
      require: true,
    },
    {
      label: "Email :",
      name: "email",
      type: "email",
      placeholder: "Enter Your Email I'D",
      require: true,
    },
    {
      label: "Password :",
      name: "password",
      type: "password",
      placeholder: "Enter Your Password",
      require: true,
    },
    {
      label: "Phone number :",
      name: "phone",
      type: "number",
      placeholder: "Enter Your Phone Number",
      require: true,
    },
    {
      label: "Birth Date :",
      name: "bod",
      type: "date",
      require: true,
    },
  ];

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validateForm(){
    let newErrors = {};

    const nameRegex = /^[a-zA-Z0-9_\s]+/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const pwdRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if(!nameRegex.test(formData.name)){
        newErrors.name = "Name contains Only Character....";
    }

    if(!emailRegex.test(formData.email)){
        newErrors.email = "Enter valid Email I'D....";
    }

    if(!pwdRegex.test(formData.password)){
        newErrors.email = "Your password must be have at least 8 characters long 1 uppercase & 1 lowercase character 1 number and 1 Special Character";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(validateForm()){
        alert(
            `Name : ${formData.name} | Email : ${formData.email} | Password : ${formData.password} | Phone Number : ${formData.phone} | City : ${formData.city} | Birth Date : ${formData.bod} |`
        );
    }

    
  }

  return (
    <>
      <div style={styles.formBox}>
        <h1>Registration Form</h1>
        <form
          action=""
          method="post"
          style={styles.form}
          onSubmit={handleSubmit}
        >
          {formFields.map((field) => (
            <div key={field.name} style={styles.formField}>
              <label htmlFor="" style={styles.label}>
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                style={styles.formInput}
                required={field.require}
              />
              {errors[field.name] && (
                <p style={{color: "red"}}>{errors[field.name]}</p>
              )}
            </div>
          ))}
          <div style={styles.formField}>
            <label htmlFor="#" style={styles.label}>
              City :
            </label>
            <select name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select Your City</option>
              <option value="surat">Surat</option>
              <option value="ahmedabad">Ahmedabad</option>
              <option value="pune">Pune</option>
            </select>
            {errors.city && (
                <p style={{color: "red"}}>{errors.city}</p>
            )}
          </div>
          
          <div>
            <button style={styles.register}>Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;

const styles = {
  formBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",
  },
  form: {
    width: "700px",
    height: "Auto",
    padding: "40px",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "20px",
  },
  formField: {
    margin: "20px auto",
  },
  label: {
    color: "#212121",
  },
  formInput: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    padding: "10px 30px",
    borderBottom: "1px solid #212121",
    fontFamily: "Cambria",
  },
  register: {
    border: "none",
    outline: "none",
    backgroundColor: "crimson",
    color: "white",
    fontSize: "18px",
    padding: "15px 45px",
    fontFamily: "Cambria",
    borderRadius: "10px",
  },
};
