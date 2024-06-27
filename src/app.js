const express = require("express");
const db = require("./db");
const app = express();














const port = process.env.port || 3000;
app.listen(port, () => console.log (`servidor en puerto ${port}`));