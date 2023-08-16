import { Request, Response } from "express";
import { Post } from "../models/post";

export const getAllPost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  try {
    const queryResult = await Post.findAll();
    return res.status(200).json(queryResult);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener las posts",
      error,
    });
  }
};

export const getPostById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const queryResult = await Post.findByPk(id);
    return res.status(200).json(queryResult);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener la post",
      error,
    });
  }
};

export const createPost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  try {
    const queryResult = await Post.create(body);
    return res.status(200).json({ success: true, data: queryResult });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Error al crear la post", error });
  }
};

export const updatePost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const { body } = req;
  try {
    const queryResult = await Post.update(body, { where: { id } });
    return res.status(200).json({ success: true, data: queryResult });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Error al crear la post", error });
  }
};

export const deletePost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const queryResult = await Post.destroy({ where: { id } });
    return res.status(200).json({ success: true, data: queryResult });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Error al crear la post", error });
  }
};
