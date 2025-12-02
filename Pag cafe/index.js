const express = require ("express");
const path = require("path");

const mysql = require("mysql")

const app = express();

const session = require("express-session");

app.use(session({
    secret: "clave-secreta",
    resave: false,
    saveUninitialized: true
}));


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

app.get("/", function(req, res){
    res.render("login");
});


app.get("/login", (req, res) => {
    res.render("login");
});


app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM login_usuarios WHERE email = ? AND password = ?";
    
    conexion.query(sql, [email, password], (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.render("login", { error: "Correo o contraseña incorrectos" });
        }

        const user = results[0];

        // Guardamos en la sesión correctamente
        req.session.userId = user.id;
        req.session.role = user.role;

        if (user.role === "admin") {
            return res.redirect("/admin");
        } else {
            return res.redirect("/registro");
        }
    });
});


app.get("/registro", (req, res) => {
    // Opcional: aseguramos que solo un user pueda entrar
    if (req.session.role !== "user") {
        return res.send("Acceso denegado. Solo usuarios.");
    }

    res.render("registro");
});

app.get("/admin", (req, res) => {
    // Solo ADMIN puede entrar
    if (req.session.role !== "admin") {
        return res.send("Acceso denegado. Solo administradores.");
    }

    const sql = "SELECT * FROM usuarios";

    conexion.query(sql, (err, results) => {
        if (err) throw err;

        res.render("admin", { usuarios: results });
    });
});


app.get("/admin/eliminar/:id", (req, res) => {
    if (req.session.role !== "admin") {
        return res.send("Acceso denegado.");
    }

    const id = req.params.id;

    const sql = "DELETE FROM usuarios WHERE id = ?";

    conexion.query(sql, [id], (err, result) => {
        if (err) throw err;

        res.redirect("/admin");
    });
});

app.get("/admin/editar/:id", (req, res) => {
    if (req.session.role !== "admin") {
        return res.send("Acceso denegado.");
    }

    const id = req.params.id;

    const sql = "SELECT * FROM usuarios WHERE id = ?";
    conexion.query(sql, [id], (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.send("Usuario no encontrado");
        }

        res.render("editar", { usuario: results[0] });
    });
});


app.post("/admin/editar/:id", (req, res) => {
    if (req.session.role !== "admin") {
        return res.send("Acceso denegado.");
    }

    const id = req.params.id;
    const { nombre, email } = req.body;

    const sql = "UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?";

    conexion.query(sql, [nombre, email, id], (err, result) => {
        if (err) throw err;

        res.redirect("/admin");
    });
});



app.post("/validar", function(req,res){
   const datos = req.body;


    let nombre = datos.nombre
    let correo = datos.email

    let registrar = "INSERT INTO usuarios (nombre, email) VALUES(?, ?)";

    conexion.query(registrar, [nombre, correo], function(error){
    if(error){
        throw error;
    }else{
        console.log("Datos almacenados correctamente");
        return res.render("registro", { mensaje: "Formulario enviado correctamente" });
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




