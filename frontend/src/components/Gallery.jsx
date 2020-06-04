import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Post from "./Post";
const Gallery = (props) => {
  let allGallery = props.allPosts.map((post) => (
    <Col sm={4} className='mb-3'>
      <Post post={post} />
    </Col>
  ));

  return (
    <div className="mt-5 mb-5">
      <Container>
        <Row >{allGallery}</Row>
      </Container>
    </div>
  );
};

export default Gallery;
