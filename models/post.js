const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "貼文姓名未填寫"],
    },
    userPhoto: {
      type: String,
      required: [true, "貼文照片未上傳"],
    },
    tags: [
      {
        type: String,
        required: [true, "貼文標籤 tags 未填寫"],
      },
    ],
    type: {
      type: String,
      enum: ["group", "person"],
      required: [true, "貼文類型 type 未填寫"],
    },
    image: {
      type: String,
      default: "",
    },
    createAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
    content: {
      type: String,
      required: [true, "Content 未填寫"],
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
  }
);

// specific response content
postSchema.methods.toJSON = function () {
  return {
    postId: this._id,
  };
};

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
