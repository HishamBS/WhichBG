import { Col, Row, Container } from "react-bootstrap";
import Post from "./Post";
import React, { Component } from "react";
export default class Gallery extends Component {
  render() {
    let allGallery = this.props.allPosts.map((post) => (
      <Col
        id={`post_${this.props.allPosts.indexOf(post)}`}
        sm={4}
        className="mb-3"
      >
        <Post post={post} />
      </Col>
    ));
    return (
      <div className="mt-5 mb-5">
        <Container>
          <Row>{allGallery}</Row>
        </Container>
      </div>
    );
  }
}
