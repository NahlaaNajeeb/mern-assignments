const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/user");

router.post("/signup", (request, response) => {
  User.find({ email: request.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return response.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(request.body.password, 10, (err, hash) => {  //to hash while saving the pass
          if (err) {
            return response.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: request.body.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                response.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                response.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
});

router.delete("/:userId", (request, response, next) => {
  User.remove({ _id: request.params.userId })
    .exec()
    .then(result => {
      response.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      response.status(500).json({
        error: err
      });
    });
});

module.exports = router;
