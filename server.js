import dbObj from './Helpers/dbConnection';
import express from 'express';
import router from './Routes/routes';
import config from './Resources/applicationProperties'

const app = express();
const port = config.dev.server.port;

//establish connection with the db
dbObj.establishConnection();

app.use('/', router);
app.listen(port, () => console.log(`Leaves app started listening on port ${port}!`));