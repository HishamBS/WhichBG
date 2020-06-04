import React, { Component } from "react";
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
    msg: "",
  };

  handleChange = (e) => {
    this.setState({ msg: e.target.value });
  };
  handleSendButton = () => {
    axios
      .post(`/posts/newcomment/${this.state.id}`, { msg: this.state.msg })
      .then((result) => {
        console.log(result);
        this.refs.inputField.value = "";
        this.setState({ comments: result.data.post.post_comments });
      })
      .catch((e) => console.log(e));
  };
  render() {
    return (
      <div>
        <Container style={{ border: "1px solid black",marginTop:"100px" }}>
          <Row style={{ alignContent:"center",textAlign:"center" ,justifyContent:"center"}}>
            <h2>Write Something About The Picture</h2>
          </Row>
          <Row>
            <Col style={{float:"left",marginRight:"50px"}}>
              <img style={{width:"100%",height: "20vw"}}src={this.props.post.post_image} />
            </Col>
            <Col style={{float:"right"}}>
            <FormControl
              placeholder="Write here , click enter to send..."
              aria-describedby="basic-addon2"
              onChange={this.handleChange}
              ref="inputField"
              onKeyDown={e=>{
                if(e.keyCode==13)
                this.handleSendButton()
              }}
            />
            {this.state.comments.map((comment) => (
                <Table bordered>
                  <tr style={{ textAlign: "left" }}>
                    <td style={{ width: "10px" }}>Anon:</td>
                    <td>{comment}</td>
                  </tr>
                </Table>
              ))}
          </Col>
          </Row>
        </Container>
       
      </div>
    );
  }
}
