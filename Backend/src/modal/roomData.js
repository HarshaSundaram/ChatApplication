// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.connect('mongodb+srv://userones:userones@ictfiles.vof9i.mongodb.net/CSLIBRARY?retryWrites=true&w=majority');

// schema definition
const schema = mongoose.Schema;
const roomSchema= new schema({   
    name: String,
    members:Array

});

// model
var roomdata = mongoose.model('roomdata',roomSchema);
module.exports = roomdata;