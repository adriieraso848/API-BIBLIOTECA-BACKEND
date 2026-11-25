let conectar = require("../conexion/db")

class LibrosController {

    ver = async (req, res) => {
        let [respuesta] = await conectar.query(
            "SELECT * FROM libros"
        )
        return res.json(respuesta)
    }

    registrar = async (req, res) => {
        let { titulo, isbn, anio_publicacion, cantidad, autor_id, categoria_id } = req.body

        let respuesta = await conectar.query(
            "INSERT INTO libros (titulo, isbn, anio_publicacion, cantidad, autor_id, categoria_id) VALUES (?, ?, ?, ?, ?, ?)",
            [titulo, isbn, anio_publicacion, cantidad, autor_id, categoria_id]
        )
        return res.json({
            mensaje: "Libro registrado correctamente"
        })
    }

    actualizar = async (req, res) => {
        let { titulo, isbn, anio_publicacion, cantidad, autor_id, categoria_id } = req.body

        let respuesta = await conectar.query(
            "UPDATE libros SET titulo=?, isbn=?, anio_publicacion=?, cantidad=?, autor_id=?, categoria_id=? WHERE id=?",
            [titulo, isbn, anio_publicacion, cantidad, autor_id, categoria_id, req.params.id]
        )
        return res.json({
            mensaje: "Libro actualizado correctamente"
        })
    }
    
    eliminar = async (req, res) => {
        let respuesta = await conectar.query(
            "DELETE FROM libros WHERE id=?",
            [req.params.id]
        )
        return res.json({
            mensaje: "Libro eliminado correctamente"
        })
    }
}
module.exports = LibrosController
