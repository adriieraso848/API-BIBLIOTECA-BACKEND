let conectar = require("../conexion/db")
let bcrypt = require("bcrypt")

class UsuariosController {
    ver = async (req, res) => {
        let [respuesta] = await conectar.query(
            "SELECT * FROM usuarios"
        )
        return res.json(respuesta)
    }

    registrar = async (req, res) => {
        let { nombre, correo, telefono, estado } = req.body
        let [respuesta] = await conectar.query(
            "INSERT INTO usuarios (nombre, correo, telefono, estado) VALUES (?, ?, ?, ?)",
            [nombre, correo, telefono, estado]
        )

        return res.json({
            mensaje: "Usuario registrado correctamente",
            id: respuesta.insertId
        })
    }

    actualizar = async (req, res) => {
        let { nombre, correo, telefono, estado } = req.body
        let [respuesta] = await conectar.query(
            "UPDATE usuarios SET nombre=?, correo=?, telefono=?, estado=? WHERE id=?",
            [nombre, correo, telefono, estado, req.params.id]
        )
        return res.json({
            mensaje: "Usuario actualizado correctamente"
        })
    }
    
    eliminar = async (req, res) => {
        let [respuesta] = await conectar.query(
            "DELETE FROM usuarios WHERE id=?",
            [req.params.id]
        )
        return res.json({
            mensaje: "Usuario eliminado correctamente"
        })
    }
}
module.exports = UsuariosController

