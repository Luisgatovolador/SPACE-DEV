import mongoose from "mongoose";

const Esquema = mongoose.Schema;

const AdministradorSchema = new Esquema({
    Nombre: String,
    CorreoElectronico: String,
    Contrasena: String
}, {
    timestamps: true
});

export default mongoose.model("Administradores", AdministradorSchema);
