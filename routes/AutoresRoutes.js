
let express = require("express")
let router = express.Router()

let AutoresController = require("../controllers/AutoresController")

const autoresController = new AutoresController()

router.get("/", autoresController.ver)
router.post("/", autoresController.registrar)
router.put("/:id", autoresController.actualizar)
router.delete("/:id", autoresController.eliminar)

module.exports = router
