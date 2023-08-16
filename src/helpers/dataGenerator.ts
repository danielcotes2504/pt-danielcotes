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

const generateFakeCategories = async (): Promise<void> => {
  const categoryData = [];
  for (let i = 1; i <= 10; i++) {
    const category = { id: i, nombre: randAnimalType() };
    categoryData.push(category);
  }

  await Categoria.bulkCreate(categoryData);
};
const generateFakeData = async (): Promise<void> => {
  try {
    await generateFakeCategories();
  } catch (error) {
    console.log(error)
    console.error("Error at generation of fake data");
  }
};

generateFakeData();
