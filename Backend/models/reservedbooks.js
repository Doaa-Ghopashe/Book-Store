const mongoose = require("mongoose");

const reservedBookSchema = new mongoose.Schema({
    book_id:String,
    user_id:String,
    shelve:String
});
const reservedbookModel = mongoose.model("reservedbook", reservedBookSchema);
module.exports = reservedbookModel;