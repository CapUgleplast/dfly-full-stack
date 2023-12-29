import {Router} from "express";
import uploadController from "../controllers/uploadController.js";

const router = new Router();

router.get('/:id', uploadController.prototype.getOne);
router.delete('/:id', uploadController.prototype.delete);
router.post('/', uploadController.prototype.create);
router.put('/:id', uploadController.prototype.update);



export default router;