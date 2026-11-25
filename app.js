let express = require("express");
let cors = require("cors");
let PORT = 5000

const AutoresRoutes = require("./routes/AutoresRoutes")
const CategoriasRoutes = require("./routes/CategoriasRoutes")
const LibrosRoutes = require("./routes/LibrosRoutes")
const PrestamosRoutes = require("./routes/PrestamosRoutes")
const UsuariosRoutes = require("./routes/UsuariosRoutes")

const app=express();
app.use(cors())
app.use(express.json());


app.use("/api/usuarios", UsuariosRoutes)
app.use("/api/autores", AutoresRoutes)
app.use("/api/categorias", CategoriasRoutes)
app.use("/api/libros", LibrosRoutes)
app.use("/api/prestamos", PrestamosRoutes)

app.listen(PORT,()=>{
    console.log("Servidor ejecutandose correctamente " + PORT)
});