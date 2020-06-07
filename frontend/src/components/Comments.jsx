import React, { Component } from "react";
import { checkAuth } from "./functionAuth";
import moment from "moment";
import { Helmet } from "react-helmet";

import {
  Col,
  Table,
  InputGroup,
  Card,
  Button,
  FormControl,
  Container,
  Row,
} from "react-bootstrap";
import axios from "axios";

export default class Comments extends Component {
  state = {
    img: this.props.post.post_image,
    title: this.props.post.post_title,
    id: this.props.post._id,
    likes: this.props.post.post_likes,
    desc: this.props.post.post_desc,
    comments: this.props.post.post_comments,
    comment: "",
    sender: localStorage.getItem("user_nickname"),
    user_id: localStorage.getItem("user_id"),
  };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };
  handleSendButton = () => {
    axios
      .post(`/posts/newcomment/${this.state.id}`, {
        user_id: this.state.user_id,
        comment: this.state.comment,
        sender: this.state.sender,
      })
      .then((result) => {
        this.refs.inputField.value = "";
        this.setState({ comments: result.data.post.post_comments });
      })
      .catch((e) => console.log(e));
  };
  render() {
    checkAuth();
    return (
      <div>
        <Helmet>
          <title>{`WhichBG? - ${this.state.title} Comments`}</title>
        </Helmet>
        <Container
          id="post_box"
          style={{ border: "1px solid black", marginTop: "100px" }}
        >
          <Row
            style={{
              alignContent: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <h2>Write Something About The Picture</h2>
          </Row>
          <Row>
            <Col style={{ float: "left", marginRight: "50px" }}>
              <a href={this.state.img} target="_blank">
                <img
                  id="img"
                  style={{ width: "100%", height: "20vw" }}
                  src={this.props.post.post_image}
                />
              </a>
            </Col>
            <Col style={{ float: "right" }}>
              <FormControl
                id="typing_area"
                placeholder="Write here , click enter to send..."
                aria-describedby="basic-addon2"
                onChange={this.handleChange}
                ref="inputField"
                onKeyDown={(e) => {
                  if (e.keyCode == 13) this.handleSendButton();
                }}
              />
              <Table bordered id="comments_table">
                {this.state.comments.reverse().map((comment) => (
                  <tr style={{ textAlign: "left" }}>
                    <td
                      id={`sender_name_${this.state.comments.indexOf(comment)}`}
                      style={{ width: "10px" }}
                    >
                      {comment.sender}
                    </td>
                    <td id={`comment_${this.state.comments.indexOf(comment)}`}>
                      {comment.comment}
                    </td>
                  </tr>
                ))}
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
