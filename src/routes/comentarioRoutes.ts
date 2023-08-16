import {
  createComentario,
  deleteComentario,
  getAllComentario,
  getComentarioById,
  updateComentario,
} from "../controllers/comentarioController";
import { Router } from "express";

const router = Router();

router.get("/comentario/verTodo", getAllComentario);
router.get("/comentario/ver/:id", getComentarioById);

router.post("/comentario/create/", createComentario);

router.put("/comentario/update/:id", updateComentario);


router.delete("/comentario/delete/:id", deleteComentario);

export default router;
