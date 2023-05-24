const rate_model = require('../models/rate'),

createRate = (req,res)=>{
    rate_model.create({...req.body},(err, data)=>{
        if(!err) return res.status(200).json(data);
        console.log(err);
        return res.status(500).json('there is an error in database');
    })
},

updateRate = (req,res)=>{
    let {id} =req.params;
    rate_model.findByIdAndUpdate({_id:id},(err,data)=>{
        if(!err) return res.status(200).json(data);
        console.log(err);
        return res.status(500).json('there is an error in database');
    })
},

deleteRate = (req,res)=>{
    let {id} =req.params;
    rate_model.findByIdAndRemove({_id:id},(err,data)=>{
        if(!err) return res.status(200).json(data);
        console.log(err);
        return res.status(500).json('there is an error in database');
    })
},

getRate = (req,res)=>{
    rate_model.find({},(err,data)=>{
        if(!err) return res.status(200).json(data);
        console.log(err)
        res.status(500).json({Error: "DB_ERR"})
    })
};

module.exports = {
    createRate,
    updateRate,
    deleteRate,
    getRate
};