import React from "react";
import Post from "../Post";
import "./feed.styles.scss";
import axios from "axios";
import { Helmet } from "react-helmet";
import swal from "sweetalert";
import { checkAuth } from "../functionAuth";

class Feed extends React.Component {
  state = {
    userLiked: [],
    userUploaded: [],
    user_id: localStorage.getItem("user_id"),
  };

  handleDelete = (post_id) => {
    axios.delete(`/posts/${post_id}`).then((result) => {
      if (result.data.msg == "deleted successfully") {
        swal({
          title: "Successfully Deleted",
          text: `😔`,
          icon: "success",
          button: "ok",
        }).then(() => {
          window.location.reload(true);
        });
      }
    });
  };

  handleUserLiked = () => {
    axios.get(`/users/${this.state.user_id}/likedposts`).then((likedPosts) => {
      this.setState({ userLiked: likedPosts.data });
    });
  };

  handleUserUploaded = () => {
    axios
      .get(`/users/${this.state.user_id}/uploadedposts`)
      .then((uploadedPosts) => {
        console.log(uploadedPosts);

        this.setState({ userUploaded: uploadedPosts.data });
      });
  };

  componentDidMount() {
    this.handleUserLiked();
    this.handleUserUploaded();
  }
  render() {
    checkAuth();
    return (
      <div className="feed-page">
        <Helmet>
          <title>{"WhichBG? - My Feed"}</title>
        </Helmet>
        <div className="feed-likes">
          <h1 className="feed-title">Likes</h1>
          {this.state.userLiked
            ? this.state.userLiked.map((post) => (
                <Post
                  id={`post_${this.state.userLiked.indexOf(post)}`}
                  post={post}
                />
              ))
            : null}
        </div>
        <div className="feed-uplode">
          <h1 className="feed-title">Upload</h1>
          {this.state.userUploaded
            ? this.state.userUploaded.map((post) => (
                <div style={{ position: "right" }}>
                  <button
                    id={`delete_post_btn_${this.state.userUploaded.indexOf(
                      post
                    )}`}
                    onClick={() => {
                      this.handleDelete(post._id);
                    }}
                  >
                    ❌Delete
                  </button>
                  <Post
                    id={`post_${this.state.userUploaded.indexOf(post)}`}
                    post={post}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default Feed;
