const pool = require("./pool");

async function getAllTasks(){
     const { rows } = await pool.query("SELECT * FROM task");
      return rows;
}

async function getAllTasksPeriod(date){
    const { rows } = await pool.query(`SELECT * FROM task WHERE date >= '${date}'`)
    return rows;
}

async function getAllCategories(){
    const { rows } = await pool.query("SELECT category_id,category_name,SUM(time) AS time FROM category INNER JOIN task ON category_id = task_category_id GROUP BY category_id,category_name");
     return rows;
}

async function getAllCategoriesPeriod(date){
    const { rows } = await pool.query(`SELECT category_id,category_name,SUM(time) AS time FROM category INNER JOIN task ON category_id = task_category_id WHERE date >= '${date}' GROUP BY category_id,category_name`)
    return rows
}

async function addTask(obj){
    const date = new Date()
    const dateString = date.toISOString().substr(0,10)
    const {rows} = await pool.query(`INSERT INTO task (task_name,time,date,task_category_id) VALUES ('${obj.name}',${obj.time},'${dateString}',${obj.category})`);
    return;
}

async function addCat(obj){
    const date = new Date()
    const dateString = date.toISOString().substr(0,10)
    const catRows = await pool.query(`INSERT INTO category (category_name) VALUES ('${obj.NewCategory}')`)
    const NewCatId = await pool.query("SELECT category_id FROM category ORDER BY category_id DESC LIMIT 1")
    const { rows } = await pool.query(`INSERT INTO task (task_name,time,date,task_category_id) VALUES ('${obj.name}',${obj.time},'${dateString}',${NewCatId.rows[0].category_id})`);
    return;
}

module.exports={
    getAllTasks,
    getAllTasksPeriod,
    getAllCategories,
    getAllCategoriesPeriod,
    addTask,
    addCat
}