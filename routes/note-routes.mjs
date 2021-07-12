/* note-routes */

import express from 'express';
import { noteController } from '../controller/note-controller.mjs';

const router = express.Router();

// URL /note/
router.get('/', noteController.getItem);

// eslint-disable-next-line import/prefer-default-export
export const noteRoutes = router;
