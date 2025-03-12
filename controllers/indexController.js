const db = require('../db/test')


async function tasks(req,res){
    const task = "Learn Japanese"
    const element = "Kevin"
    res.render("index",{db : db, element:element})
}

module.exports = {
    tasks,
}