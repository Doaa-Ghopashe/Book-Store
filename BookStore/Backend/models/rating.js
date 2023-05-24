const mongoose = require('mongoose'),

rate_schema = new mongoose.Schema({
    rate_val : {type:number , required:true , max:5},
    book_id : {type:string , required:true , ref:"book"},
    user_id : {type:string , required:true , ref:"user"}
}),

rate_model = mongoose.model('Rate',rate_schema);

module.exports = rate_model;