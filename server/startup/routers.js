const express = require("express");
// const errorMiddleware = require('../middleware/error');

const algoritm = require("../routers/algorithm");
//const user = require("../routers/user");
const auth = require("../routers/auth");

module.exports = function (app) {
  app.use(express.urlencoded());
  app.use(express.json());

  app.use("/api/algorithms", algoritm);
  //app.use("/api/algorithms", algoritm);

  //app.use("/api/me", user);
  app.use("/api/auth", auth);
  // app.use(errorMiddleware);


};