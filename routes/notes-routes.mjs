/* notes-routes */

import express from 'express';
import { noteController } from '../controller/note-controller.mjs';

const router = express.Router();

// URL /notes/
router.get('/', noteController.getItems);
router.post('/', noteController.setItem);
router.get('/:id/', noteController.getItem);
router.delete('/:id/', noteController.deleteItem);
router.put('/:id/', noteController.updateItem);

// eslint-disable-next-line import/prefer-default-export
export const notesRoutes = router;
