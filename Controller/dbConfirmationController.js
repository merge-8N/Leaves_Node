import {getDbConfirmationService} from '../Service/dbConfirmationService';
export const getDbConfirmationController = (req, res) => {
    res.json(getDbConfirmationService());
}