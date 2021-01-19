let express = require('express');

let app = express();

const PORT = 3000;

app.get('/api/clientes', (req,res)=>{
    console.log("peticion GET a api clientes");
    res.send("API Clientes");
});

app.listen(PORT, ()=>console.log("Ejecutando el servidor en el puerto:"+PORT));