import axios from "axios";
import decode from "jwt-decode";
import swal from "sweetalert";

export const register = (newUser) => {
  return axios
    .post("/api/v1/users/register", newUser)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const login = (user) => {
  return axios
    .post("/api/v1/users/login", user)
    .then(async (res) => {
      localStorage.setItem("usertoken", res.data.token);
      const decodedToken = await decode(res.data.token);
      localStorage.setItem("user_id", decodedToken.id);
      localStorage.setItem("user_nickname", decodedToken.nickname);
      return res.data.token;
    })
    .catch((err) => console.log(err));
};

export const checkAuth = async (props) => {
  var dateNow = new Date();
  if (!localStorage.usertoken) {
    window.location.href = "/login";
    swal({
      title: "You Need To Login First",
      icon: "warning",
      button: "ok",
    });
    console.log("offline");
  } else {
    const token = localStorage.getItem("usertoken");
    var decodedToken = await decode(token);
    var exp = decodedToken.exp;
    if (exp < dateNow.getTime() / 1000) {
      localStorage.setItem("usertoken", "");
      swal({
        title: "You Need To sign in",
        icon: "warning",
        button: "ok",
      }).then(() => {
        window.location.href = "/login";
      });
    }
  }
};

export const getUserData = async () => {
  const uid = localStorage.getItem("user_id");
  if (uid) {
    axios
      .get(`/api/v1/users/${uid}`)
      .then((user) => {
        console.log(user.data);
        return user.data;
      })
      .catch((err) => console.log(err));
  }
};

export const checkTokenExpired = async () => {
  var dateNow = new Date();

  if (localStorage.getItem("usertoken")) {
    const token = localStorage.getItem("usertoken");
    var decodedToken = await decode(token);
    var exp = decodedToken.exp;
    if (exp < dateNow.getTime() / 1000) {
      localStorage.setItem("usertoken", "");
      swal({
        title: "You Need To sign in",
        icon: "warning",
        button: "ok",
      }).then(() => {
        window.location.href = "/login";
      });
    }
  }
};
