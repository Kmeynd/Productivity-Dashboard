const { Client } = require("pg");
require('dotenv').config()

const SQL = `
CREATE TABLE IF NOT EXISTS category (
  category_id SERIAL PRIMARY KEY,
  category_name TEXT
);

INSERT INTO category (category_name) 
VALUES
  ('Japanese'),
  ('Workout'),
  ('Coding');

CREATE TABLE IF NOT EXISTS task (
    task_id SERIAL,
    task_name VARCHAR (255),
    time INTEGER,
    date DATE,
    task_category_id INTEGER REFERENCES category (category_id)
);

INSERT INTO task (task_name,time,date,task_category_id)
VALUES
    ('Kanji',60,'2025-04-07',1),
    ('Push-ups',15,'2025-04-14',2),
    ('Web App',120,'2025-04-15',3);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();