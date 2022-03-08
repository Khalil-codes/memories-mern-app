import { Router } from "express";
import {
    createPost,
    deletePost,
    getPosts,
    likePost,
    updatePost,
} from "../controllers/postsController";

const router: Router = Router();

router.route("/").get(getPosts).post(createPost);
router.route("/:id").patch(updatePost).delete(deletePost);
router.route("/:id/like").patch(likePost);

export default router;
