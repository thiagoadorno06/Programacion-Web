Instrucciones para ejecutar mi pagina de cafe

Instrucciones para ejecutar el proyecto “Pag Café”
 1. Preparación del entorno

Antes de ejecutar el proyecto, asegúrese de tener instalado lo siguiente:

XAMPP (incluye MySQL y Apache)

Se utilizará MySQL desde XAMPP para la base de datos.

Node.js 

2. Visual Studio Code
Ejecutar en la terminal el comando npm install para descargar todas las dependencias

3 Base de datos
Primero vamos a entrar a XAMP y activar Apache y MySQL después de eso vamos a clickear donde en MySQL dice Admin, una vez entrado a phpMyadmin, tendremos q hacer lo siguiente, crear una  base de datos que  se va a llamar CONTACTO y que tendrá dos tablas:
CREATE TABLE  usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);

CREATE TABLE  login_usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    role VARCHAR(50) NOT NULL
);

INSERT INTO login_usuarios (email, password, role)
VALUES 
('admin@admin.com', 'admin123', 'admin'),
('user@user.com', 'user123', 'user');


4 Listo
Después de hacer todo esto simplemente ejecutamos en la terminal node index.js y ya tendriamos el servidor localhost, entrar y decidir que rol usar ingresando el correo y contraseña que cargamos en la base de datos anteriormente, de parte de usuarios tenemos un formulario que completar y enviar a la base de datos y de parte del admin, gestiona estos datos leyendolos y editandolos o eliminandolos

