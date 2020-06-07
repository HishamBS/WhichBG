import React from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import axios from "axios";
import { checkAuth } from "./functionAuth";
import { withRouter } from "react-router";

import "./post.style.scss";

class Post extends React.Component {
  state = {
    img: this.props.post.post_image,
    title: this.props.post.post_title,
    id: this.props.post._id,
    likes: this.props.post.post_likes,
    desc: this.props.post.post_desc,
    comments: this.props.post.post_comments.length,
    user_id: localStorage.getItem("user_id"),
    userLiked: [],
  };

  getUserLiked = () => {
    axios
      .get(`/users/${localStorage.getItem("user_id")}/likedposts`)
      .then((likedPosts) => {
        this.setState({ userLiked: likedPosts.data });
      });
  };

  // handleLikeButton = () => {
  //   if (localStorage.getItem("user_id")) {
  //     axios
  //       .post(`/posts/like/${this.state.id}`, { user_id: this.state.user_id })
  //       .then((result) => {
  //         this.setState({ likes: result.data.post.post_likes });
  //       })
  //       .catch((e) => console.log(e));
  //   }
  // };

  handleLikeButton = () => {
    if (localStorage.getItem("user_id")) {
      axios
        .post(`/posts/like/${this.state.id}`, { user_id: this.state.user_id })
        .then((result) => {
          this.setState({ likes: result.data.post.post_likes });
        })
        .catch((e) => console.log(e));
    }
    //remove like{
    // if (this.state.userLiked.find((post) => post._id == this.state.id)) {
    let liked = false;
    this.state.userLiked.forEach((element) => {
      if (this.state.id == element._id) {
        liked = true;
      }
    });

    // if its not liked
    if (!liked) {
      // add like
      this.state.userLiked.push(this.props.post);
    } else {
      // remove like
      this.state.userLiked = this.state.userLiked.filter(
        (elem) => this.state.id != elem._id
      );
    }

    //add like
  };

  componentDidMount() {
    if (localStorage.getItem("usertoken")) {
      this.getUserLiked();
    }
    if (this.state.userLiked.find((post) => post._id == this.state.id)) {
      this.setState({ liked: true });
    }
  }

  render() {
    return (
      <div>
        <div className="item" id={`card_${this.state.id}`}>
          <img
            className="item-img"
            onClick={() =>
              this.props.history.push("/comments/" + this.state.id)
            }
            id={`img_${this.state.id}`}
            src={this.state.img}
          />
          <span id={`title_${this.state.id}`} className="item-title">
            {" "}
            {this.state.title}
          </span>

          <div className="item-footer">
            <span className="item-supTitle" id={`desc_${this.state.id}`}>
              {this.state.desc}
            </span>

            <div className="item-buttons">
              <button
                className="item-button"
                id={`like_btn_${this.state.id}`}
                onClick={(e) => {
                  checkAuth();
                  this.handleLikeButton();
                }}
              >
                {this.state.likes}
                {this.state.userLiked.find((post) => post._id == this.state.id)
                  ? "❤️"
                  : "🤍"}
              </button>

              <button
                className="item-button"
                onClick={() =>
                  this.props.history.push("/comments/" + this.state.id)
                }
                id={`comment_btn_${this.state.id}`}
              >
                {this.state.comments} 💭
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Post);
