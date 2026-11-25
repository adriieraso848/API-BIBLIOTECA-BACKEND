
let express = require("express")
let router = express.Router()

let LibrosController = require("../controllers/LibrosController")

const librosController = new LibrosController()

router.get("/", librosController.ver)
router.post("/", librosController.registrar)
router.put("/:id", librosController.actualizar)
router.delete("/:id", librosController.eliminar)

module.exports = router
