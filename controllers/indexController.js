const db = require('../db/queries')

// function daysInYear(year) {
//     if(year){
//         return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;
//     }else{
//         const year =new Date().getFullYear()
//         return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;
//     }
   
// }

function listofDays(year){
    let m = 1
    let listday = []
    while (m!=13){
        let m1
        let d1
        if(`${m}`.length==1){
            m1=`0${m}`
        }else{ m1 = `${m}`}
        let d=1
        while(true){
            if(`${d}`.length==1){
                d1=`0${d}`
                let newd = new Date(`${year}-${m1}-${d1}`)
                let verif = newd.getDate()
                if(`0${verif}`!=d1){
                    break
                }
                listday.push(newd)
                d++
            }else{ 
                d1 = `${d}`
                let newd = new Date(`${year}-${m1}-${d1}`)
                let verif = newd.getDate()

                if(`${verif}`!=d1){
                    break
                }
                listday.push(newd)
                d++
            } 
        }
        m++
    }
    return listday

}

async function home(req,res){
    let dates_year
    let day_year
    let task
    let category
    if(req.query.period=='30'){
        // make new query from db to get tasks from last 30days
    }else if (req.query.period=='7'){
         // make new query from db to get tasks from last 7days
    }else{
        dates_year = listofDays(2025)
        day_year = dates_year.length
        task = await db.getAllTasks()
        category = await db.getAllCategories()
    }
    res.render("index",{db : task, cat: category, Goal: day_year, dates_year : dates_year})
}

module.exports = {
    home,
}