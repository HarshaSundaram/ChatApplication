// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.connect('mongodb+srv://userones:userones@ictfiles.vof9i.mongodb.net/CSLIBRARY?retryWrites=true&w=majority');

// schema definition
const Schema=mongoose.Schema;
const BlockchatSchema = new Schema({
   
    from:String,
    to:String
    
    
});

//Model creation
var Blockchatdata=mongoose.model('Blockchatdata',BlockchatSchema);
module.exports=Blockchatdata;