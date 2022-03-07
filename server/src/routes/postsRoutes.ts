import { Router } from "express";
import { createPost, getPosts } from "../controllers/postsController";

const router: Router = Router();

router.route("/").get(getPosts).post(createPost);

export default router;
