import React, { Component } from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import axios from "axios";
import { checkAuth } from "./functionAuth";

export default class Post extends Component {
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

  handleLikeButton = () => {
    if (localStorage.getItem("user_id")) {
      axios
        .post(`/posts/like/${this.state.id}`, { user_id: this.state.user_id })
        .then((result) => {
          this.setState({ likes: result.data.post.post_likes });
        })
        .catch((e) => console.log(e));
    }
  };

  isPostLiked = () => {

    if(this.state.userLiked.find((post) => post._id == this.state.id))
      return true
      
  };

  componentDidMount() {
    if (localStorage.getItem("usertoken")) {
      this.getUserLiked();
    }
  }

  render() {
    return (
      <div>
        <Card
          className="card-home-body"
          style={{ width: "22rem" }}
          border="primary"
          id={`card_${this.state.id}`}
        >
          <a href={`/comments/${this.state.id}`}>
            <Card.Img
              className="card-home-img"
              variant="top"
              src={this.state.img}
              id={`img_${this.state.id}`}
            />
          </a>
          <Card.Body
            style={{
              margin: "auto",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            <Card.Title id={`title_${this.state.id}`}>
              {this.state.title}
            </Card.Title>
            <p id={`desc_${this.state.id}`}>{this.state.desc}</p>
            <Container>
              <Button
                className="align-self-end"
                variant="primary"
                href={`/comments/${this.state.id}`}
                id={`comment_btn_${this.state.id}`}
              >
                {this.state.comments} 💭
              </Button>
              <Button
                disabled={this.isPostLiked()}
                className="align-self-end"
                id={`like_btn_${this.state.id}`}
                onClick={(e) => {
                  checkAuth();
                  this.handleLikeButton();
                  e.target.setAttribute("disabled", true);
                }}
                variant="primary"
              >
                {this.state.likes} 👍
              </Button>
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
