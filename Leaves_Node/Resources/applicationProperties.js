var config = {
    dev: {
        database: {
            hostname: '127.0.0.1',
            port: '3306',
            username: 'root',
            database: 'USER'
        },
        server: {
            port: '3000'
        }
    },
    createUserTable: 'CREATE TABLE IF NOT EXISTS USERS(N_EMP_ID INT AUTO_INCREMENT, S_EMAIL VARCHAR(255), S_NAME VARCHAR(255) NOT NULL, S_PHONE_NO VARCHAR(255) NOT NULL, S_PASSWORD VARCHAR(255) NOT NULL, S_DOB VARCHAR(255) NOT NULL, S_ROLE VARCHAR(255) NOT NULL, N_ISACTIVATED TINYINT(1) NOT NULL, PRIMARY KEY(N_EMP_ID, S_EMAIL));',
}
module.exports = config;