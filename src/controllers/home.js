const path = require("path")

function GET (req, res){
    res.sendFile(path.join(process.cwd() + "/src" + "/views" + "index.html"))
}

module.exports = {
    GET
}