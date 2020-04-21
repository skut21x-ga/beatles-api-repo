const Song = require("../models/List");
const SongData = require("./lyrics.json")


Song.deleteMany({}).then(()=>{
    Song.create(SongData).then(lists=>{
        console.log(lists);
        process.exit();
    })
})