const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: {
    type:String,
    required:true
  },
  date: {
    type: String,
    default: new Date()
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('todo' , todoSchema);