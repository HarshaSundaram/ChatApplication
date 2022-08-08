// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.connect('mongodb+srv://userones:userones@ictfiles.vof9i.mongodb.net/CSLIBRARY?retryWrites=true&w=majority');


// schema definition
const schema = mongoose.Schema;
const userSchema= new schema({   
    name: String,
    email:String,
    password:String,
    status:String
});

// model
var userdata = mongoose.model('userdata',userSchema);
module.exports = userdata;