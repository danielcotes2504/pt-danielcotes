import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import { Categoria } from "./categoria";
import { Comentario } from "./comentario";

class Post extends Model {
  private titulo!: string;
  private contenido!: string;
  private fecha_creacion!: string;
  private fecha_actualizacion!: string;
}

Post.init(
  {
    id: {
      field: "id",
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    categorias_id: {
      field: "Categorias_id",
      type: DataTypes.BIGINT,
    },

    titulo: {
      field: "titulo",
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
    tableName: "Posts",
    freezeTableName: true,
    timestamps: true,
    createdAt: "fecha_creacion",
    updatedAt: "fecha_actualizacion",
  }
);

Post.belongsTo(Categoria, {
  foreignKey: "categorias_id",
});

Post.hasMany(Comentario, { foreignKey: "posts_id" });

export { Post };
