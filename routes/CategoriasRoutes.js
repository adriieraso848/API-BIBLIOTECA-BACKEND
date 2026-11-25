
let express = require("express")
let router = express.Router()

let CategoriasController = require("../controllers/CategoriasController")

const categoriasController = new CategoriasController()

router.get("/", categoriasController.ver)
router.post("/", categoriasController.registrar)
router.put("/:id", categoriasController.actualizar)
router.delete("/:id", categoriasController.eliminar)

module.exports = router
