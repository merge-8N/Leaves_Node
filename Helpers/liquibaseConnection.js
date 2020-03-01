import liquibase from 'liquibase-mysql';
import config from '../Resources/applicationProperties';

const liquibaseCon = () => {
    liquibase({
        changeLogFile: config.liquibase.changelogFile,
        url: config.liquibase.url,
        username: config.liquibase.username
    })
    .run('update')
    .then(() => console.log('success'))
    .catch((err) => console.log('fail', err));
};
module.exports = liquibaseCon;