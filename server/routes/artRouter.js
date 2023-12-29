import {Router} from "express";
import { artController } from "../controllers/artController.js";

const router = new Router();

router.get('/:id', artController.prototype.getOne);
router.get('/', artController.prototype.getAll);
router.put('/:id', artController.prototype.update);
router.delete('/:id', artController.prototype.delete);
router.post('/', artController.prototype.create);


export default router;