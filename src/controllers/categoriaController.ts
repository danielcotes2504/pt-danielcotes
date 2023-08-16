import { Request, Response } from "express";
import { Categoria } from "../models/categoria";

export const getAllCategoria = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  try {
    const queryResult = await Categoria.findAll();
    return res.status(200).json(queryResult);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener las categorías",
      error,
    });
  }
};

export const getCategoriaById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const queryResult = await Categoria.findByPk(id);
    return res.status(200).json(queryResult);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener la categoría",
      error,
    });
  }
};

export const createCategoria = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  try {
    const queryResult = await Categoria.create(body);
    return res.status(200).json({ success: true, data: queryResult });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Error al crear la categoría", error });
  }
};

export const updateCategoria = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const { body } = req;
  try {
    const queryResult = await Categoria.update(body, { where: { id } });
    return res.status(200).json({ success: true, data: queryResult });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Error al crear la categoría", error });
  }
};


export const deleteCategoria = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const queryResult = await Categoria.destroy({ where: { id } });
    return res.status(200).json({ success: true, data: queryResult });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Error al crear la categoría", error });
  }
};
