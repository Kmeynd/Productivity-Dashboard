const db = require('../db/test')


async function task(req,res){
    res.render("task")
}

async function sent(req,res){
    console.log(req.body)
    db.push({Task_name:req.body.name, Time:req.body.time})
    res.redirect("/")
}

module.exports = {
    task,
    sent,
}