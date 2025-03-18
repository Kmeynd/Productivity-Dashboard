const db = require('../db/queries')


async function task(req,res){
    const category = await db.getAllCategories()
    res.render("task",{cat:category})
}

async function sent(req,res){
    console.log(req.body)
    res.redirect("/")
}

module.exports = {
    task,
    sent,
}

// Do not use coma