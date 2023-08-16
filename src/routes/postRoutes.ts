import {
  createPost,
  deletePost,
  getAllPost,
  getPostById,
  updatePost,
} from "../controllers/postController";
import { Router } from "express";

const router = Router();

router.get("/post/verTodo", getAllPost);
router.get("/post/ver/:id", getPostById);

router.post("/post/create/", createPost);

router.put("/post/update/:id", updatePost);

router.delete("/post/delete/:id", deletePost);

export default router;
