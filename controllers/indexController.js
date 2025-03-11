
async function tasks(req,res){
    const task = "Learn Japanese"
    res.render("index",{task : task})
}

module.exports = {
    tasks,
}