const review_model = require('../models/review'),

createReview = (req,res)=>{
    review_model.create({...req.body},(err, data)=>{
        if(!err) return res.status(200).json(data);
        console.log(err);
        return res.status(500).json('there is an error in database');
    })
},

updateReview = (req,res)=>{
    let {id} =req.params;
    review_model.findByIdAndUpdate({_id:id},(err,data)=>{
        if(!err) return res.status(200).json(data);
        console.log(err);
        return res.status(500).json('there is an error in database');
    })
},

deleteReview = (req,res)=>{
    let {id} =req.params;
    review_model.findByIdAndRemove({_id:id},(err,data)=>{
        if(!err) return res.status(200).json(data);
        console.log(err);
        return res.status(500).json('there is an error in database');
    })
},

getReview = (req,res)=>{
    review_model.find({},(err,data)=>{
        if(!err) return res.status(200).json(data);
        console.log(err)
        res.status(500).json({Error: "DB_ERR"})
    })
};

module.exports = {
    createReview,
    updateReview,
    deleteReview,
    getReview
};