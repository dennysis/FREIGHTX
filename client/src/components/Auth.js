import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../css/login.css";

function Auth({ onLogin, isLogin }) {
  const [error, setError] = useState(null);
  const [isLoginMode, setIsLoginMode] = useState(isLogin);
  const history = useHistory();

  const initialValues = isLoginMode
    ? { email: "", password: "" }
    : { username: "", email: "", password: "", balance: "" };

  const validationSchema = isLoginMode
    ? Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
      })
    : Yup.object({
        username: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Must be at least 6 characters")
          .required("Required"),
        balance: Yup.number().positive("Must be positive").required("Required"),
      });

  const handleSubmit = (values, { setSubmitting }) => {
    const url = isLoginMode ? "/login" : "/signup";
    const body = isLoginMode
      ? { email: values.email, password: values.password }
      : {
          username: values.username,
          email: values.email,
          password: values.password,
          balance: values.balance,
        };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Error: ${response.status} - ${text}`);
          });
        }
        return response.json();
      })
      .then((user) => {
        console.log("Login/Signup successful:", user);
        onLogin(user);
        history.push("/home");
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  function toggleMode() {
    setIsLoginMode(!isLoginMode);
    setError(null);
    history.push(isLoginMode ? "/signup" : "/login");
  }

  return (
    <div id="login">
      <video autoPlay muted loop id="background-video">
        <source
          src="https://static.videezy.com/system/resources/previews/000/007/218/original/CIRCULAR_INTERFACE_HUD.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="navbar">
        <img
          src="https://i.pinimg.com/564x/86/4a/3e/864a3e877dc16143e216b145da06a336.jpg"
          alt="Logo"
          className="logo"
        />
        <span className="brand-name">FREIGHTX</span>
      </div>
      <div className="box-container">
        <div className={`box ${isLoginMode ? "login-box" : "signup-box"}`}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id="login-form">
                {!isLoginMode && (
                  <>
                    <label htmlFor="username">Username:</label>
                    <Field type="text" name="username" />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="error"
                    />
                  </>
                )}
                <label htmlFor="email">Email:</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
                <label htmlFor="password">Password:</label>
                <Field type="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
                {!isLoginMode && (
                  <>
                    <label htmlFor="balance">Balance:</label>
                    <Field type="number" name="balance" />
                    <ErrorMessage
                      name="balance"
                      component="div"
                      className="error"
                    />
                  </>
                )}
                <button type="submit" disabled={isSubmitting}>
                  {isLoginMode ? "Login" : "Signup"}
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <button id="switch-btn" onClick={toggleMode}>
        {isLoginMode ? "Switch to Signup" : "Switch to Login"}
      </button>
    </div>
  );
}

export default Auth;
