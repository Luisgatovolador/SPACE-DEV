import ModelPublicacion from "../models/ModelPublicacion.js";

// Crear Publicación
export const createPublicacion = async (req, res) => {
    try {
        const data = new ModelPublicacion(req.body);
        await data.save();
        res.json({ success: true, message: "Publicación guardada exitosamente", data: data });
    } catch (error) {
        console.error("Error al crear la publicación:", error);
        res.status(500).json({ success: false, message: "Error del servidor" });
    }
};

// Obtener Publicaciones
export const getPublicaciones = async (req, res) => {
    try {
        const data = await ModelPublicacion.find({});
        res.json({ success: true, data: data });
    } catch (error) {
        console.error("Error al obtener las publicaciones:", error);
        res.status(500).json({ success: false, message: "Error del servidor" });
    }
};

// Obtener Publicación por ID
export const getPublicacionByID = async (req, res) => {
    const publicacionId = req.params.id;

    try {
        const publicacion = await ModelPublicacion.findById(publicacionId);
        if (!publicacion) {
            return res.status(404).json({ success: false, message: "Publicación no encontrada" });
        }
        res.json({ success: true, data: publicacion });
    } catch (error) {
        console.error("Error al obtener la publicación:", error);
        res.status(500).json({ success: false, message: "Error del servidor" });
    }
};

// Actualizar Publicación
export const updatePublicacion = async (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    try {
        const data = await ModelPublicacion.findOneAndUpdate({ _id: id }, newData, { new: true, omitUndefined: true });
        res.json({ success: true, message: "Datos de la publicación actualizados exitosamente", data: data });
    } catch (error) {
        console.error("Error al actualizar los datos de la publicación:", error);
        res.status(500).json({ success: false, message: "Error del servidor" });
    }
};

// Eliminar Publicación por su ID
export const deletePublicacion = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await ModelPublicacion.findByIdAndDelete(id);
        res.json({ success: true, message: "Publicación eliminada exitosamente", data: data });
    } catch (error) {
        console.error("Error al eliminar la publicación:", error);
        res.status(500).json({ success: false, message: "Error del servidor" });
    }
};

// Obtener publicaciones por autor
export const getPublicacionesAutor = async (req, res) => {
    const autor = req.params.autor;

    try {
        const publicaciones = await ModelPublicacion.find({ Autor: autor });
        if (publicaciones.length === 0) {
            return res.status(404).json({ success: false, message: "No se encontraron publicaciones para este autor" });
        }
        res.json({ success: true, data: publicaciones });
    } catch (error) {
        console.error("Error al obtener las publicaciones por autor:", error);
        res.status(500).json({ success: false, message: "Error del servidor" });
    }
};
