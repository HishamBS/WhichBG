const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = require("../models/Post");
const User = require("../models/User");
//get specific post page
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.json({ msg: "post doesn't exist", err: err });
    });
});

//get all posts page
router.get("/", async (req, res) => {
  try {
    let allPosts = await Post.find().sort({ post_likes: "desc" });
    res.json(allPosts);
  } catch (error) {
    res.json({ msg: error });
  }
});

//create a new post
router.post("/newpost", async (req, res) => {
  try {
    let post = new Post(req.body);
    let savedPost = await post.save();
    res.json({ msg: "added", post: savedPost });
  } catch (error) {
    res.json({ msg: error });
  }
});

//increase like
router.post("/like/:id", async (req, res) => {
  try {
    let user = await User.findById(req.body.user_id);
    let post = await Post.findById(req.params.id);
    if (!user.liked_posts.find((post) => post._id == req.params.id)) {
      post.post_likes += 1;
      user.total_likes += 1;
      user.liked_posts.push(post._id);
      let likedPost = await post.save();
      let likedUser = await user.save();
      res.json({ msg: "liked", post: likedPost, user: likedUser.nickname });
    } else {
      post.post_likes -= 1;
      user.total_likes -= 1;
      user.liked_posts = user.liked_posts.filter(
        (liked) => liked != req.params.id
      );
      let unlikedPost = await post.save();
      let unlikedUser = await user.save();
      res.json({
        msg: "unliked",
        post: unlikedPost,
        user: unlikedUser.nickname,
      });
    }
  } catch (error) {
    res.json({ msg: error });
  }
});

//add comment
router.post("/newcomment/:id", async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    let user = await User.findById(req.body.user_id);
    user.total_comments += 1;
    post.post_comments.push(req.body);
    let cmt = await post.save();
    let cmtUsr = await user.save();
    res.json({ msg: "added comment", post: cmt });
  } catch (error) {
    res.json({ msg: error });
  }
});

//delete a post
router.delete("/:id", (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((post) => {
      res.json({ msg: "deleted successfully", post: post });
    })
    .catch((err) => {
      res.json({ msg: "Post doesn't exist", err: err });
    });
});

//edit a post
router.put("/:id", (req, res) => {
  let updatedPost = req.body;

  Post.findByIdAndUpdate(req.params.id, updatedPost)
    .then((post) => {
      res.json({ msg: "edited successfully", post: post });
    })
    .catch((err) => {
      res.json({ msg: "Mall doesn't exist", err: err });
    });
});

module.exports = router;
