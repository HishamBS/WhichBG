import React, { Component } from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import axios from "axios";

export default class Post extends Component {
  state = {
    img: this.props.post.post_image,
    title: this.props.post.post_title,
    id: this.props.post._id,
    likes: this.props.post.post_likes,
    desc: this.props.post.post_desc,
    comments: this.props.post.post_comments.length,
  };

  handleLikeButton = () => {
    axios
      .post(`/posts/like/${this.state.id}`, this.state.likes)
      .then((result) => {
        this.setState({ likes: result.data.post.post_likes });

        //
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div>
        <Card style={{ width: "22rem" }} border="primary">
          <Card.Img variant="top" src={this.state.img} />
          <Card.Body style={{ margin: "auto" ,alignContent:"center",textAlign:"center"}}>
            <Card.Title>{this.state.title}</Card.Title>
            <Card.Text>{this.state.desc}</Card.Text>
            <Container>
            <Button
              className="mr-2"
              variant="primary"
              href={`/comments/${this.state.id}`}
            >
              {this.state.comments} 💭
            </Button>
            <Button
              onClick={(e) => {
                e.target.setAttribute("disabled", true);
                this.handleLikeButton();
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
