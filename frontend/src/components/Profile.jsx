import React from "react";
import "./Profile.styles.scss";
import CustomButton from "./custom-button/custom-button.component";
import { Helmet } from "react-helmet";
import { checkAuth } from "./functionAuth";
import axios from "axios";
import swal from "sweetalert";

class Profile extends React.Component {
  state = {
    user_id: localStorage.getItem("user_id"),
    nickname: "",
    total_likes: "",
    total_comments: "",
    email: "",
    disabled: true,
  };

  handleUserInfo = () => {
    axios.get(`/users/${this.state.user_id}`).then((result) => {
      if (result) {
        this.setState({
          nickname: result.data.nickname,
          total_comments: result.data.total_comments,
          total_likes: result.data.total_likes,
          email: result.data.email,
        });
      }
    });
  };

  handleSavePassword = () => {
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        this.state.password
      )
    ) {
      axios
        .put(`/users/editpassword/${this.state.user_id}`, {
          password: this.state.password,
        })
        .then((result) => {
          if (result.data.msg == "password edited successfully") {
            localStorage.removeItem("usertoken");
            localStorage.removeItem("user_id");
            localStorage.removeItem("user_nickname");
            swal({
              title: "Password Changed Successfully",
              text: `You need to loging again with the new password`,
              icon: "success",
              button: "ok",
            }).then(() => {
              window.location.href = "/login";
            });
          }
        });
    } else {
      swal({
        title: "Password Formation not correct",
        text: `8 chars , at least 1 small letter , 1 capital , 1 number , 1 special char`,
        icon: "error",
        button: "ok",
      });
    }
  };
  componentDidMount() {
    this.handleUserInfo();
  }

  render() {
    checkAuth();
    return (
      <div className="profile">
        <Helmet>
          <title>{"WhichBG? - Profile"}</title>
        </Helmet>
        <h1 className="myProfile">Personal Information</h1>
        <span className="profile-name">
          <span>Email :</span>
          <span id="email_value">{this.state.email}</span>
        </span>
        <span className="profile-name">
          <span>Nickname :</span>
          <span id="nickname_value">{this.state.nickname}</span>
        </span>
        <span className="profile-name">
          <span>Total Likes :</span>
          <span id="total_likes_value">{this.state.total_likes}</span>
        </span>
        <span className="profile-name">
          <span>Total Comments :</span>
          <span id="total_comments_value">{this.state.total_comments}</span>
        </span>
        <span className="profile-name">
          <span>Password :</span>
          <input
            id="password_input"
            type="password"
            name="password"
            placeholder="click edit to enable typing , then click save to save new password"
            disabled={this.state.disabled}
            onChange={(e) => {
              this.setState({
                password: e.target.value,
              });
            }}
          />
        </span>
        <div className="profile-button">
          <CustomButton
            id="edit_password_btn"
            inverted
            onClick={() => {
              this.setState({ disabled: !this.state.disabled });
            }}
          >
            Edit Password
          </CustomButton>
          <CustomButton
            id="save_password_btn"
            inverted
            onClick={this.handleSavePassword}
          >
            Save Password
          </CustomButton>
        </div>
      </div>
    );
  }
}

export default Profile;
