const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
   // console.log('db ' + connection.state);
});

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {

            const query = "SELECT * FROM names";

            connection.query(query, (err, results) => {
                if (err) reject(new Error(err.message));
                resolve(results);
            })
        });

        //console.log(response);
        return response;

        } catch (error) {
            console.log(error);
        }
    }

    async insertNewName(name) {
        try {
            const dateAdded = new Date();
            const insertId = await new Promise((resolve, reject) => {

                const query = "INSERT INTO names (name, date_added) VALUES (?, ?);";
    
                connection.query(query, [name, dateAdded], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results.insertId);
                })
            });
            
            return {
                id : insertId,
                name : name,
                dateAdded : dateAdded
            }
        } catch (err) {
            console.log(err);
        }
    }

    async deleteRowById(id) {
        try {
            id = parseInt(id, 10);

            const response = await new Promise((resolve, reject) => {

                const query = "DELETE FROMnames WHERE id = ?";

                connection.query(query, [name, dateAdded], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results.affectedRows);
                })
            });

            return response === 1 ? true : false;

        } catch (error) {
            console.log(error);
            return false;
        }

        

        console.log(response);
    }
}

module.exports = DbService;