let conectar = require("../conexion/db")

class PrestamosController {

    ver = async (req, res) => {
        let [respuesta] = await conectar.query(
            "SELECT * FROM prestamos"
        )
        return res.json(respuesta)
    }

    registrar = async (req, res) => {
        let { usuario_id, libro_id, fecha_prestamo, fecha_devolucion, estado } = req.body

        let respuesta = await conectar.query(
            "INSERT INTO prestamos (usuario_id, libro_id, fecha_prestamo, fecha_devolucion, estado) VALUES (?, ?, ?, ?, ?)",
            [usuario_id, libro_id, fecha_prestamo, fecha_devolucion, estado]
        )

        return res.json({
            mensaje: "Prestamo registrado correctamente"
        })
    }

    actualizar = async (req, res) => {
        let { usuario_id, libro_id, fecha_prestamo, fecha_devolucion, estado } = req.body

        let respuesta = await conectar.query(
            "UPDATE prestamos SET usuario_id=?, libro_id=?, fecha_prestamo=?, fecha_devolucion=?, estado=? WHERE id=?",
            [usuario_id, libro_id, fecha_prestamo, fecha_devolucion, estado, req.params.id]
        )

        return res.json({
            mensaje: "Prestamo actualizado correctamente"
        })
    }
    
    eliminar = async (req, res) => {
        let respuesta = await conectar.query(
            "DELETE FROM prestamos WHERE id=?",
            [req.params.id]
        )

        return res.json({
            mensaje: "Prestamo eliminado correctamente"
        })
    }
}
module.exports = PrestamosController
