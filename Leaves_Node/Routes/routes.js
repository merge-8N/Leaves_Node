import express from 'express';
import { getDbConfirmationController } from '../Controller/dbConfirmationController'

const router = express.Router()

router.route('/')
      .get(getDbConfirmationController);

// router.route('/registerUser')
//     .post();

export default router;