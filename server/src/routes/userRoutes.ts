import { Router } from "express";
import { loginUser, registerUser } from "../controllers/userController";

const router: Router = Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);

export default router;
