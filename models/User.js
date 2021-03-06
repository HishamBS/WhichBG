const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    liked_posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post"
      }
    ],
    uploaded_posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post"
      }
    ],
    total_likes:{
      type:Number,
      default:0
    },
    total_comments:{
      type:Number,
      default:0
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;