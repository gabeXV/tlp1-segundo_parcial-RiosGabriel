const express = require("express");
const db = require("./db");
const app = express();

app.use(express.json());

app.get("/", (req,res) =>{
    res.send("pagina de inicio");
});

app.get("/products", (req,res) =>{
    res.json(db);
});

app.get("/products/:id", (req,res)=>{
    const id = parseInt(req.params.id);
    const getproducts = db.find((producto) => producto.id ===  id);

    res.json(getproducts);
});













const port = process.env.port || 3000;
app.listen(port, () => console.log (`servidor en puerto ${port}`));