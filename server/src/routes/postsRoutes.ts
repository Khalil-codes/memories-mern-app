import { Router } from "express";
import {
    createPost,
    deletePost,
    getPosts,
    likePost,
    updatePost,
} from "../controllers/postsController";
import protect from "../middelwares/authMiddleware";

const router: Router = Router();

router.route("/").get(protect, getPosts).post(protect, createPost);
router.route("/:id").patch(protect, updatePost).delete(protect, deletePost);
router.route("/:id/like").patch(protect, likePost);

export default router;
