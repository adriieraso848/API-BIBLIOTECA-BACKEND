
let express = require("express")
let router = express.Router()

let UsuariosController = require("../controllers/UsuariosController")

const usuariosController = new UsuariosController()
router.get("/", usuariosController.ver)
router.post("/", usuariosController.registrar)
router.put("/:id", usuariosController.actualizar)
router.delete("/:id", usuariosController.eliminar)

module.exports = router
