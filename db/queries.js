const pool = require("./pool");

async function getAllTasks(){
     const { rows } = await pool.query("SELECT * FROM task");
      return rows;
}

async function getAllCategories(){
    const { rows } = await pool.query("SELECT category_id,category_name,SUM(time) AS time FROM category INNER JOIN task ON category_id = task_category_id GROUP BY category_id,category_name");
     return rows;
}

async function addTask(obj){
    const date = new Date()
    const dateString = date.toISOString().substr(0,10)
    // Uncomment once the form validation is over
    // const {rows} = await pool.query(`INSERT INTO task (task_name,time,date,task_category_id) VALUES ('${obj.name}',${obj.time},'${dateString}',${obj.category})`);
    console.log(obj)
    return;
}

async function addCat(obj){
    const date = new Date()
    const dateString = date.toISOString().substr(0,10)
    // Uncomment once the form validation is over
    // const catRows = await pool.query(`INSERT INTO category (category_name) VALUES ('${obj.NewCategory}')`)
    // const NewCatId = await pool.query("SELECT category_id FROM category ORDER BY category_id DESC LIMIT 1")
    // const { rows } = await pool.query(`INSERT INTO task (task_name,time,date,task_category_id) VALUES ('${obj.name}',${obj.time},'${dateString}',${NewCatId.rows[0].category_id})`);
    console.log(obj)
    return;
}

module.exports={
    getAllTasks,
    getAllCategories,
    addTask,
    addCat
}