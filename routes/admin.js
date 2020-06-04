const mongoose = require("mongoose");
const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
require("dotenv/config");

AdminBro.registerAdapter(require('admin-bro-mongoose'))

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: "/admin"
});

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookiePassword: process.env.COOKIE_PASS,
  authenticate: async (email, password) => {
    let user = await User.findOne({ email: email });
    if (user) {
      let matched = await bcrypt.compareSync(password, user.password);
      if (matched && user.isAdmin) {
        return user;
      } else {
        return null;
      }
    }
  }
});

module.exports = router;