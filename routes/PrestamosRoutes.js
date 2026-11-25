
let express = require("express")
let router = express.Router()

let PrestamosController = require("../controllers/PrestamosController")

const prestamosController = new PrestamosController()

router.get("/", prestamosController.ver)
router.post("/", prestamosController.registrar)
router.put("/:id", prestamosController.actualizar)
router.delete("/:id", prestamosController.eliminar)

module.exports = router
