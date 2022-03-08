import { Router } from "express";
import {
    createPost,
    deletePost,
    getPosts,
    updatePost,
} from "../controllers/postsController";

const router: Router = Router();

router.route("/").get(getPosts).post(createPost);
router.route("/:id").patch(updatePost).delete(deletePost);

export default router;
