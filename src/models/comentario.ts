import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

class Comentario extends Model {
  private contenido!: string;
  private fecha_creacion!: string;
  private fecha_actualizacion!: string;
}

Comentario.init(
  {
    id: {
      field: "id",
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    posts_id: {
      field: "posts_id",
      type: DataTypes.BIGINT,
    },
    contenido: {
      field: "contenido",
      type: DataTypes.TEXT,
    },
    fecha_creacion: {
      field: "fecha_creacion",
      type: DataTypes.TIME,
    },
    fecha_actualizacion: {
      field: "fecha_actualizacion",
      type: DataTypes.TIME,
    },
  },
  {
    sequelize: sequelize,
    tableName: "Comentarios",
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
    freezeTableName: true,
    timestamps: true,
  }
);


export { Comentario };
