const db = require('../db/queries')
const { body, validationResult } = require("express-validator");

async function task(req,res){
    const category = await db.getAllCategories()
    res.render("task",{cat:category})
}

async function sent(req,res){
    const errors = validationResult(req)
    const category = await db.getAllCategories()
    const catarray = category.map((e) => e.category_name)

    // Check if necessary field are filled
    if(errors.errors.filter(e => e.path=='time'||e.path=='name'||e.path=='password' )!=''){
        return res.status(400).render("task",{
            cat:category, 
            errors:errors.array().filter(e => e.path=='time'|| e.path=='name'||e.path=='password')
        })
    }
    // Simply add a task if we use an old category
    if(req.body.AddCategory=='AddOldCategory'){
        const send = await db.addTask(req.body)
    }else{
        // if not check if there is an error with the new category field
        if(errors.errors.filter(e => e.path=='NewCategory')!=''){
            return res.status(400).render("task",{
                cat:category, 
                errors:errors.array()
            })
        }
        // and check if new category already exists (if it does we send a custom error message)
        if (catarray.includes(req.body.NewCategory)){
            return res.status(400).render("task",{
                cat:category, 
                errors:[ {msg:'New category cannot have the same name as an old category'} ]
            })
        }
        const sendCat = await db.addCat(req.body)
    }

    res.redirect("/")
}

module.exports = {
    task,
    sent,
}
