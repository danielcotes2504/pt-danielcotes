import { createCategoria, deleteCategoria, getAllCategoria, getCategoriaById, updateCategoria } from "../controllers/categoriaController";
import { Router } from "express";

const router = Router();

router.get("/categoria/verTodo",getAllCategoria);
router.get("/categoria/ver/:id", getCategoriaById);

router.post("/categoria/create/",createCategoria);

router.put("/categoria/update/:id",updateCategoria);


router.delete("/categoria/delete/:id",deleteCategoria);

export default router;
