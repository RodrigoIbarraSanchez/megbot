var mongoose = require ('mongoose')
var Schema = mongoose.Schema
//var mongooseUniqueValidator = require ('mongoose-unique-validator')

var todoSchema = new Schema({
    task: {type: String}
})
//schema.plugin(mongooseUniqueValidator)

var Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo