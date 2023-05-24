const express = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: 'string',required: true
    },
    lastName:{type: 'string'},
    age:{type: 'number'},
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });

  const userModel=mongoose.model('User',userSchema);
  module.exports = userModel;