import mongoose from "mongoose";

const { Schema } = mongoose;

const PublicacionSchema = new Schema({
    Titulo: String,
    Autor: String,
    Resumen: String,
    Fecha: Date,
    URl: String
}, {
    timestamps: true
});

export default mongoose.model("Publicaciones", PublicacionSchema);
