import React from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import "./App.css";
import swal from "sweetalert";
import Home from "./components/Home";
import { Navbar, Nav, Button } from "react-bootstrap";
import NotFound from "./components/NotFound";
import axios from "axios";
import UploadPage from "./components/UploadPage";
import Comments from "./components/Comments";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import FooterPage from "./components/FooterPage";
import Profile from "./components/Profile";
import Feed from "./components/feed/Feed";

class App extends React.Component {
  state = {
    allPosts: [],
  };
  getBGS = () => {
    axios
      .get("/posts")
      .then((result) => this.setState({ allPosts: result.data }))
      .catch((e) => console.log(e));
  };

  handleClick = (e) => {
    localStorage.removeItem("usertoken");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_nickname");
    swal({
      title: "Logout successfully",
      icon: "success",
      showConfirmButton: false,
      timer: 2500,
    }).then((window.location.href = "/"));
  };

  componentDidMount() {
    this.getBGS();
  }

  render() {
    // {match} means i only want match from this.props not the whole props *
    // find here return only the object that matches not an array
    // if (!this.state.allPosts.length) return <div className="App" />;

    return (
      <div className="App">
        <BrowserRouter>
          {!localStorage.usertoken ? (
            <Navbar expand="lg">
              <Navbar.Brand href="/">WhichBG?</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <NavLink className="nav-link" href="/" id="navbar_home">
                    Home
                  </NavLink>
                  <NavLink className="nav-link" href="/login" id="navbar_login">
                    Login
                  </NavLink>
                  <NavLink className="nav-link" href="/signup" id="navbar_signup">
                    SignUp
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          ) : (
            <Navbar expand="lg">
              <Navbar.Brand href="/">WhichBG?</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <NavLink className="nav-link" to="/" id="navbar_home">
                    Home
                  </NavLink>
                  <NavLink
                    className="nav-link"
                    to="/profile"
                    id="navbar_profile"
                  >
                    My Profile
                  </NavLink>
                  <NavLink className="nav-link" to="/myfeed" id="navbar_myfeed">
                    My Feed
                  </NavLink>
                  <NavLink className="nav-link" to="/upload" id="navbar_upload">
                    Upload
                  </NavLink>
                  <NavLink
                    as={Button}
                    onClick={this.handleClick}
                    className="nav-link"
                    to="/"
                    id="navbar_logout"
                  >
                    Logout
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          )}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/upload" component={UploadPage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/myfeed" component={Feed} />

            <Route
              path="/comments/:id"
              render={({ match }) => {
                if (!this.state.allPosts) return <NotFound />;

                return (
                  <Comments
                    post={this.state.allPosts.find(
                      (post) => post._id === match.params.id
                    )}
                  />
                );
              }}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
        {/* <FooterPage/> */}
      </div>
    );
  }
}

export default App;
