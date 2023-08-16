import {
  rand,
  randAnimalType,
  randFileName,
  randText,
  seed,
} from "@ngneat/falso";
import { Categoria } from "../models/categoria";
import { Comentario } from "../models/comentario";
import { Post } from "../models/post";

// const post = {id:1, titulo: randFileName(), contenido: randText()}

const generateFakeCategories = async (): Promise<void> => {
  const categoryData = [];
  for (let i = 1; i <= 1; i++) {
    const category = { id: i, nombre: randAnimalType() };
    categoryData.push(category);
  }

  await Categoria.bulkCreate(categoryData);
};

const generateFakePosts = async (): Promise<void> => {
  const postData = [];
  for (let i = 1; i <= 10; i++) {
    const post = { id: i, titulo: randFileName(), contenido: randText() };
    postData.push(post);
  }

  await Post.bulkCreate(postData);
};

const generateFakeComments = async (): Promise<void> => {
  const commentData = [];
  for (let i = 1; i <= 10; i++) {
    const comment = { id: i, posts_id: i, contenido: randText() };
    commentData.push(comment);
  }

  await Comentario.bulkCreate(commentData);
};

const generateFakeData = async (): Promise<void> => {
  try {
    await generateFakeCategories();
    await generateFakePosts();
    await generateFakeComments();
  } catch (error) {
    console.log(error)
    console.error("Error at generation of fake data");
  }
};

generateFakeData();
