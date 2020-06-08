const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    post_title: {
      required: true,
      type: String,
    },
    post_image: {
      required: true,
      type: String,
    },
    post_desc: {
      required: true,
      type: String,
    },
    post_comments: [
      {
        comment: {
          type: String,
          default: "",
        },
        sender: {
          type: String,
          default: "",
        },
      },
    ],
    post_likes: {
      required: true,
      type: Number,
      default: 0,
    },
    post_owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
