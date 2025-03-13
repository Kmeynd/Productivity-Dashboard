const pool = require("./pool");

async function getAllTasks(){
     const { rows } = await pool.query("SELECT * FROM task");
      return rows;
}

async function getAllCategories(){
    // Need to correct query to get category only one time 
    const { rows } = await pool.query("SELECT time,category_name FROM task INNER JOIN category ON task_category_id = category_id");
     return rows;
}

module.exports={
    getAllTasks,
    getAllCategories
}