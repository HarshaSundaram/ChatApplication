// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.connect('mongodb+srv://userones:userones@ictfiles.vof9i.mongodb.net/CSLIBRARY?retryWrites=true&w=majority');

// schema definition
const schema = mongoose.Schema;
const privatemsgSchema= new schema({   
    user:String,
    message:String,
    room:String,
    date:String,
    time:String,
    month:String,
    imgfile:String
});

// model
var privatedata = mongoose.model('privatemsg',privatemsgSchema);
module.exports = privatedata;