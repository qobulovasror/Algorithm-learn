const mongoose = require("mongoose");
// const winston = require("winston");

module.exports = function () {
  mongoose.connect("mongodb://localhost/virtualdars").then(() => {
    // winston.debug("MongoDB -> connection successful");
  });
  mongoose.set('useFindAndModify',false);
};
