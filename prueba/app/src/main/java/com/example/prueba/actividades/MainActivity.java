package com.example.prueba.actividades;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.example.prueba.R;
import com.example.prueba.databases.DBHelper;
import com.example.prueba.modelos.User;

public class MainActivity extends AppCompatActivity {


    // Vistas del layout
    EditText input_usuario, input_contrasena;

    // Variables para mantener texto ingresado
    String nombreUsuario, contraseña;

    // Helper para DB (clase que ya tenés con los métodos CRUD)
    DBHelper dbHelper;
    Button botonAceptar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /******************************************************
         *                                                    *
         *   Esta seccion por lo general viene cargada por    *
         *   defecto y no se suele tocar a menos que quieras  *
         *   personalizar los bordes de la app                *
         *                                                    *
         *****************************************************************************************************************/
        EdgeToEdge.enable(this);                                                                    //

        // Cargamos el layout principal                                                                                  //
        setContentView(R.layout.activity_main);                                                                          //

        // Ajuste de padding dinámico para respetar system bars (status + nav) — evita overlaps.                         //
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {     //
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);                          //
            return insets;                                                                                               //
        });



        // Inicializamos variables por defecto
        nombreUsuario = "";
        contraseña = "";

        // Referencias a vistas por id (de activity_main.xml)
        input_usuario = findViewById(R.id.main__input_usuario);
        input_contrasena = findViewById(R.id.main__input_contrasena);
        botonAceptar = findViewById(R.id.main__btnLogin);

        // Instanciamos DBHelper
        dbHelper = new DBHelper(MainActivity.this);

        /**
         * Atención: aquí estás creando e insertando un usuario "admin" en cada onCreate.
         * - Útil para development/testing.
         * - Riesgo: si la tabla no evita duplicados, se crearán múltiples filas "admin".
         * - Recomendación: envolver en un getUserByUsername(...) y solo insertar si no existe.
         *
         *   +---------+
         *   | admin   |  <- usuario de prueba
         *   +---------+
         */
        User usuarioNuevo = new User(0, "admin", "admin");
        long id = dbHelper.addUser(usuarioNuevo); // id devuelto por sqlite (o -1 si falla)

        // Listener del botón de ingresar
        botonAceptar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                // Leemos los valores ingresados en los EditText
                nombreUsuario = input_usuario.getText().toString();
                contraseña = input_contrasena.getText().toString();

                // Consultamos localmente si existe un usuario con ese nombre + contraseña
                User usuarioIngresado = dbHelper.comprobarUsuarioLocal(nombreUsuario, contraseña);

                /*
                 * Lógica de navegación:
                 * - Si usuarioIngresado tiene id != -1 => existe en la DB => abrimos Principal.
                 * - Si no existe mostramos un Toast indicando que no existe.
                 *
                 * Nota de seguridad: comprobarUsuarioLocal compara contraseña en texto plano.
                 * Mejor usar hashes y validar con funciones seguras.
                 */
                if (usuarioIngresado.getId() != -1) {
                    // Usuario válido -> vamos a la pantalla principal
                    Intent intent = new Intent(MainActivity.this, Inicio.class);
                    startActivity(intent);
                } else {
                    // Usuario inválido -> feedback al usuario
                    Toast.makeText(MainActivity.this, "Usuario no existe", Toast.LENGTH_SHORT).show();
                }

            }
        });

    }
}