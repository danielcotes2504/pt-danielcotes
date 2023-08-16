import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

class Categoria extends Model {
  private nombre!: string;
  private fecha_creacion!: string;
  private fecha_actualizacion!: string;
}

Categoria.init(
  {
    id: {
      field: "id",
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    nombre: {
      field: "nombre",
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
    tableName: "Categorias",
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
    freezeTableName: true,
    timestamps: true,
  }
);

export { Categoria };
