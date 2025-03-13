const db = require('../db/queries')


async function home(req,res){
    const task = await db.getAllTasks()
    const category = await db.getAllCategories()
    res.render("index",{db : task, cat: category})
}

module.exports = {
    home,
}