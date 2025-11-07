const express = require ("express");
const path = require("path");

const mysql = require("mysql")

const app = express();

let conexion = mysql.createConnection({
    host: "localhost",
    database: "contacto",
    user: "root",
    password: ""
})

app.use(express.static('public'));

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", function(req,res){
    res.render("registro");
});

app.post("/validar", function(req,res){
   const datos = req.body;

   
    res.send("Formulario recibido"); 

    let nombre = datos.nombre
    let correo = datos.email

    let registrar = "INSERT INTO usuarios (nombre, email) VALUES(?, ?)";

    conexion.query(registrar, [nombre, correo], function(error){
    if(error){
        throw error;
    }else{
        console.log("Datos almacenados correctamente");
        }
    });
});

app.get("/api/productos", (req, res) => {
  const productos = ["Brasil", "Minka", "Barista", ];
  res.json(productos);
});



app.listen(3000, function(){
    console.log("Servidor creado http://localhost:3000")
});

