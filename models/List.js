const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const listSchema = new Schema({
    Name:{
        type:String
    },
    Song:{
        type:String
    },
    Lyrics:{
        type:String
    },
    url:{type:String
    }
})

module.exports = mongoose.model("List", listSchema);

