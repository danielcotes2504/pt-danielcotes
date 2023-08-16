import { Request, Response } from "express";
import { Comentario } from "../models/comentario";

export const getAllComentario = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  try {
    const queryResult = await Comentario.findAll();
    return res.status(200).json(queryResult);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener las Comentario",
      error,
    });
  }
};

export const getComentarioById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const queryResult = await Comentario.findByPk(id);
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

export const createComentario = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  try {
    const queryResult = await Comentario.create(body);
    return res.status(200).json({ success: true, data: queryResult });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Error al crear la categoría", error });
  }
};

export const updateComentario = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const { body } = req;
  try {
    const queryResult = await Comentario.update(body, { where: { id } });
    return res.status(200).json({ success: true, data: queryResult });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Error al crear la categoría", error });
  }
};



export const deleteComentario = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const queryResult = await Comentario.destroy({ where: { id } });
    return res.status(200).json({ success: true, data: queryResult });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Error al crear la categoría", error });
  }
};
