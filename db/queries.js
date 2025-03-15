const pool = require("./pool");

async function getAllTasks(){
     const { rows } = await pool.query("SELECT * FROM task");
      return rows;
}

async function getAllCategories(){
    const { rows } = await pool.query("SELECT category_name,SUM(time) AS time FROM category INNER JOIN task ON category_id = task_category_id GROUP BY category_name");
     return rows;
}

module.exports={
    getAllTasks,
    getAllCategories
}