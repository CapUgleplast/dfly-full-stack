import {Router} from "express";
import artRouter from "./artRouter.js";
import uploadRouter from "./uploadRouter.js";

const router = new Router();

router.use('/arts', artRouter);
router.use('/uploads', uploadRouter);


export default router;