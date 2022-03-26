import { Router } from "express";
import { uploadGet } from "../controllers/upload";

const router = Router();

router.get('/', uploadGet);

export default router;