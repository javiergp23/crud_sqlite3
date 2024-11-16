const sqlite3 = require('sqlite3').verbose();
let sql;

//connect to database
const db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) =>{
    if(err){
        return console.error(err.message);
    }
    console.log('Connected to the database');
});

// create table

// sql = `CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name, last_name, username, password, email)`;
// db.run(sql)


//Drop tabnle
// db.run("DROP TABLE users");

//Inser data into table
// sql = `INSERT INTO users (first_name, last_name, username, password, email) VALUES (?, ?, ?, ?, ?)`;
// db.run(sql,["javier", "gonzalez", "javiergp23", "test", "javier@gmail.com"], 
//     (err) =>{
//         if(err){
//             return console.error(err.message);
//         }
//         console.log('Inserted data into the table');
//     }
// )

//query the data
sql = `SELECT * FROM users`;
db.all(sql,[], (err, rows) => {
    if(err) return console.error(err.message);
    rows.forEach((row) => console.log(row));
})

//update data
// sql = `UPDATE users SET first_name = ? WHERE id = ?`;
// db.run(sql, ["Eduardo", 1], (err)=> {
//     if(err) return console.error(err.message);
//     console.log('Updated data');
// })


//Delete data
sql = `DELETE FROM users WHERE id = ?`;
db.run(sql, [1], (err)=> {
    if(err) return console.error(err.message);
    console.log('Deleted data');
})
