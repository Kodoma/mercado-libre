import * as express from 'express';
import MeliController from "../controllers/meli.controller";

const router = express.Router();

router.get(`/items`, MeliController.getItems);
router.get(`/items/:id`, MeliController.getItemById);

export default router;
