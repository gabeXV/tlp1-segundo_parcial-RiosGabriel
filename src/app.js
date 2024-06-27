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

app.post("/products", (req,res) =>{
    const {id,producto, cantidad, precio} = req.body;
    const newproduct = db.push({ id: id, producto: producto, cantidad: cantidad, precio: precio,});
    console.log(newproduct);
    res.json({ message: "Producto creado con éxito" });
});

app.put("/products/:id", (req,res) => {
const id = parseInt(req.params.id);
const { producto, cantidad, precio} = req.body;
const getproducts = db.find((producto) => producto.id === id );
getproducts.producto = producto, cantidad, precio;
console.log (getproducts);
res.json({message: "producto actualizado"});
});

app.delete("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const getproducts = db.find((producto) => producto.id === id);
    const productsindex = db.indexOf (getproducts);
    const deleteproducts = db.splice(productsindex, 1);

    res.json ({ mensaje: "producto eliminado del inventario", deleteproducts  })
})













const port = process.env.port || 3000;
app.listen(port, () => console.log (`servidor en puerto ${port}`));