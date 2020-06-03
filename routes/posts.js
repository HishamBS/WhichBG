const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = require("../models/Post");

//get specific post page
router.get("/:id", (req, res) => {
    Post.findById(req.params.id)
      .then(post => {
        res.json(post);
      })
      .catch(err => {
        res.json({ msg: "post doesn't exist", err: err });
      });
  });


  //get all posts page
  router.get("/", async (req, res) => {
    try {
      let allPosts = await Post.find();
      res.json(allPosts);
    } catch (error) {
      res.json({ msg: error});
    }
  });
  
  
  
  //create a new post 
  router.post("/newpost", async (req, res) => {
    try {
      let post = new Post(req.body);
      let savedPost = await post.save();
      res.json({ msg: "added", post: savedPost});
    } catch (error) {
      res.json({ msg: error});
    }
  });

  //delete a post
  router.delete("/:id", (req, res) => {
    Post.findByIdAndDelete(req.params.id)
      .then(post => {
        res.json({ msg: "deleted successfully", post: post });
      })
      .catch(err => {
        res.json({ msg: "Post doesn't exist", err: err });
      });
  });

  //edit a post 
  router.put("/:id", (req, res) => {
  
    let updatedPost = req.body
  
    Post.findByIdAndUpdate(req.params.id,updatedPost)
      .then(post => {
        res.json({ msg: "edited successfully", post: post });
      })
      .catch(err => {
        res.json({ msg: "Mall doesn't exist", err: err });
      });
  });


  
  
  
  
  module.exports = router;