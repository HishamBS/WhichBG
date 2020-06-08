import Gallery from "./Gallery";
import { Helmet } from "react-helmet";
import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  state = {
    allPosts: [],
  };

  getBGS = () => {
    axios
      .get("/posts")
      .then((result) => this.setState({ allPosts: result.data }))
      .catch((e) => console.log(e));
  };

  componentDidMount() {
    this.getBGS();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{"WhichBG? - Home"}</title>
        </Helmet>
        <Gallery allPosts={this.state.allPosts} />
      </div>
    );
  }
}
