const express = require('express');
const userModel = require('../models/user');
const router=express.Router();

router.post('/', function(req, res){
    userModel.create({...req.body},(err,userData)=>{
        if(!err) return res.status(201).json(userData);
        res.status(500).json({Error:"DB error"});
    })


    console.log(req.body);
})