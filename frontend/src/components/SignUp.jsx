import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { register } from "./functionAuth";
import { Card, Row } from "react-bootstrap";
import { Avatar } from "antd";
import { Helmet } from "react-helmet";

export default class SignUp extends Component {
  state = {
    data: {},
  };

  addDataToState(data) {
    this.setState({ data: data });
  }

  render() {
    if (!this.state) {
      return null;
    }
    return (
      <div>
        <Helmet>
          <title>{"WhichBG? - SignUp"}</title>
        </Helmet>
        <br />
        <br />
        <Formik
          initialValues={{
            nickname: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object().shape({
            nickname: Yup.string().required("Nickname is required"),
            email: Yup.string()
              .email("Email is invalid")
              .required("Email is required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 numbers")
              .matches(/[a-z]/, 'at least one lowercase char')
              .matches(/[A-Z]/, 'at least one uppercase char')
              .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).')
              .required("Password is required"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Confirm Password is required"),
          })}
          onSubmit={(fields) => {
            this.addDataToState(fields);
            const registered = {
              nickname: this.state.data.nickname,
              email: this.state.data.email,
              password: this.state.data.password,
            };
            register(registered)
              .then((res) => {
                if (res) {
                  swal({
                    title: "Your successfully Registered",
                    text: "Welcome On Board",
                    icon: "success",
                    button: "ok",
                  }).then(() => {
                    this.props.history.push("/login");
                  });
                } else {
                  swal({
                    title: "Check your fields",
                    text: "something is not correct",
                    icon: "error",
                    button: "ok",
                  });
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          render={({ errors, status, touched }) => (
            <Row className="justify-content-md-center">
              <Card
                style={{ width: "27rem", height: "33rem" }}
                id="signup_card"
              >
                <Card.Body>
                  <Card.Title id="signup_title">Registeration Form </Card.Title>
                  <Form>
                    <div className="form-group">
                      <label htmlFor="nickname">Nickname</label>
                      <Field
                        name="nickname"
                        type="text"
                        className={
                          "form-control" +
                          (errors.nickname && touched.nickname
                            ? " is-invalid"
                            : "")
                        }
                        id="signup_nickname"
                      />
                      <ErrorMessage
                        name="nickname"
                        component="div"
                        className="invalid-feedback"
                        id="signup_nickname_err"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        name="email"
                        type="text"
                        className={
                          "form-control" +
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
                        id="signup_email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback"
                        id="signup_email_err"
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
                        id="signup_password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                        id="signup_password_err"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <Field
                        name="confirmPassword"
                        type="password"
                        className={
                          "form-control" +
                          (errors.confirmPassword && touched.confirmPassword
                            ? " is-invalid"
                            : "")
                        }
                        id="signup_confirm_password"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="invalid-feedback"
                        id="signup_confirm_password_err"
                      />
                    </div>
                    <div className="form-group">
                      <button
                        id="signup_submit"
                        type="submit"
                        className="btn btn-primary mr-2"
                      >
                        Register
                      </button>
                      <button
                        id="signup_reset"
                        type="reset"
                        className="btn btn-secondary"
                      >
                        Reset
                      </button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Row>
          )}
        />
        <h4> {this.state.message}</h4>
      </div>
    );
  }
}
