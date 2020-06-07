import React, { Component } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { Card, Row } from "react-bootstrap";
import { login } from "../components/functionAuth";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

export default class Login extends Component {
  state = {
    data: {},
    user: "",
    message: "",
    isAuthenticated: false,
  };

  addDataToState(data) {
    this.setState({ data: data });
    login(this.state.data)
      .then((res) => {
        if (res) {
          swal({
            title: "Your successfully logged in",
            text: `Welcome Back ${localStorage.getItem("user_nickname")}`,
            icon: "success",
            button: "ok",
          }).then(() => {
            this.props.history.push("/");
            window.location.reload(true);
          });
        } else {
          swal({
            title: "Check your credintials",
            text: "either your username or password is wrong",
            icon: "error",
            button: "ok",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>{"WhichBG? - Login"}</title>
        </Helmet>
        <br />
        <br />
        <Row className="justify-content-md-center">
          <Card style={{ width: '27rem',height: '30rem' }} id="login_card">
            <Card.Body>
              <Card.Title id="login_title">Login Form</Card.Title>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email("Email is invalid")
                    .required("Email is required"),
                  password: Yup.string()
                    .min(6, "Password must be at least 6 numbers")
                    .required("Password is required"),
                })}
                onSubmit={(fields) => {
                  this.addDataToState(fields);
                }}
                render={({ errors, status, touched }) => (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        name="email"
                        type="text"
                        className={
                          "form-control" +
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
                        id="login_email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback"
                        id="login_email_err"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        name="password"
                        type="password"
                        className={
                          "form-control" +
                          (errors.password && touched.password
                            ? " is-invalid"
                            : "")
                        }
                        id="login_password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                        id="login_password_err"
                      />
                    </div>
                    <div className="form-group">
                      <button id="login_submit" type="submit" className="btn btn-primary mr-2">
                        Login
                      </button>
                    </div>
                  </Form>
                )}
              />
              <Link to="/signup" id="login_signup">Don't have accoun? Signup</Link>
            </Card.Body>
          </Card>
        </Row>
      </div>
    );
  }
}
