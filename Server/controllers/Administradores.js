import ModelAdministradores from "../models/Model-Administradores.js";

// Registrar Administrador 
export const registrar = async (req, res) => {
    try {
        const data = new ModelAdministradores(req.body);
        await data.save();
        res.json({ success: true, message: "Administrador", data: data });
    } catch (error) {
        console.error("Error al crear Administrador", error);
        res.status(500).json({ success: false, message: "Error del servidor" });
    }
};

// Obtener usuario 
export const Administrador = async (req, res) => {
    const id = req.params.id;
    try {
        const administrador = await ModelAdministradores.findById(id); // Cambiado a ModelAdministradores
        if (!administrador) {
            return res.status(404).json({ success: false, message: "Administrador no encontrado" });
        }
        res.json({ success: true, message: "Administrador encontrado", data: administrador }); // Cambiado a administrador
    } catch (error) {
        // Manejo de errores
    }
};

/// Login
export const loginAdmin = (req, res) => {
    const { CorreoElectronico, Contrasena } = req.body;

    ModelAdministradores.findOne({ CorreoElectronico })
        .then(administrador => {
            if (administrador) {
                if (administrador.Contrasena === Contrasena) {


                    res.json({ 
                        success: true, 
                        message: "Inicio de sesión exitoso", 
                        administrador: administrador 
                    });
                } else {
                    res.status(401).json({ success: false, message: "Contraseña incorrecta" });
                }
            } else {
                res.status(401).json({ success: false, message: "Administrador no encontrado" });
            }
        })
        .catch(error => {
            console.error("Error al iniciar sesión:", error);
            res.status(500).json({ success: false, message: "Error del servidor" });
        });
};

