import { Router } from "express";
import { mainGet } from "../controllers/main";

const router = Router();

router.get('/', mainGet);

export default router;