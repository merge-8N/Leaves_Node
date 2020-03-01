import mysql from 'mysql'; 
import config from '../Resources/applicationProperties';

var dbObj = {
    con : mysql.createConnection({
        host: config.dev.database.hostname,
        port: config.dev.database.port,
        user: config.dev.database.username,
        database: config.dev.database.database,
        password: ""
    }),
    establishConnection: () => {
        //Creating connection to mysql database

        dbObj.con.query(config.createUserTable, (err, res) => {
            if(err)
                throw err;
            console.log("Table created");
        });
    }

}
module.exports = dbObj;