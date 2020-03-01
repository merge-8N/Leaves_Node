import {handleResponse} from '../Helpers/handleResponse';
import dbObj from '../Helpers/dbConnection';

var returnObj = {};
export const getDbConfirmationService = () => {
    dbObj.con.query('SELECT * FROM USERS;', (err, res) => {
        if(err)
            throw err;
        returnObj = handleResponse({}, 200, "OK", "");
    });
    return returnObj;
}