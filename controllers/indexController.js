const db = require('../db/queries')

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

function taskByPeriod(period){
    const Today = new Date()
    const ThisMonth = new Date()
    ThisMonth.setDate(Today.getDate()-period)
    return ThisMonth.toISOString().substr(0,10)

}

async function home(req,res){
    const thisYear = new Date()
    let dates_year = listofDays(thisYear.getFullYear())
    let day_period
    let task
    let category
   
    
    if(req.query.period=='7' || req.query.period=='30' ){
        const period = parseInt(req.query.period)
        const date = taskByPeriod(period)
        day_period = period
        task = await db.getAllTasksPeriod(date)
        category = await db.getAllCategoriesPeriod(date)

    }else{
        day_period = dates_year.length
        task = await db.getAllTasks()
        category = await db.getAllCategories()
    }
    res.render("index",{db : task, cat: category, Goal: day_period, dates_year : dates_year, limit : dates_year.length})
}

module.exports = {
    home,
}