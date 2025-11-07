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
Primero vamos a entrar a XAMP y activar Apache y MySQL después de eso vamos a clickear donde en MySQL dice Admin, una vez entrado a phpMyadmin, tendremos q hacer lo siguiente, crear una  base de datos que  se va a llamar CONTACTO y que tendrá una tabla con:
id: INT, AUTO INCREMENT
nombre: varchar
email:varchar

4 Listo
Después de hacer todo esto simplemente ejecutamos en la terminal node index.js y ya tendríamos el servidor andando

