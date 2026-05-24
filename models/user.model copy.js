const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
  },

  avatar: {
    type: String,
    required: true,
    trim: true,
  },

  coverImage: {
    type: String,
  },

  watchHistroy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
