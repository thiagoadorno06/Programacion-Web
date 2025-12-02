package com.example.prueba.actividades;

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
import com.example.prueba.modelos.Perfil;


public class Inicio extends AppCompatActivity {

    EditText inputNombre, inputApellido, inputEdad, inputDomicilio, inputEstudios, inputCorreo, inputTelefono;
    Button btnGuardar;
    DBHelper dbHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_inicio);



        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });


        dbHelper = new DBHelper(this);

        // Referencias a los campos del XML
        inputNombre = findViewById(R.id.input_nombre);
        inputApellido = findViewById(R.id.input_apellido);
        inputEdad = findViewById(R.id.input_edad);
        inputDomicilio = findViewById(R.id.input_domicilio);
        inputEstudios = findViewById(R.id.input_estudios);
        inputCorreo = findViewById(R.id.input_correo);
        inputTelefono = findViewById(R.id.input_telefono);
        btnGuardar = findViewById(R.id.btnGuardar);

        // Acción al presionar el botón
        btnGuardar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Perfil perfil = new Perfil();
                perfil.setNombre(inputNombre.getText().toString());
                perfil.setApellido(inputApellido.getText().toString());
                try {
                    perfil.setEdad(Integer.parseInt(inputEdad.getText().toString()));
                } catch (NumberFormatException e) {
                    perfil.setEdad(0);
                }
                perfil.setDomicilio(inputDomicilio.getText().toString());
                perfil.setEstudios(inputEstudios.getText().toString());
                perfil.setCorreo(inputCorreo.getText().toString());
                perfil.setTelefono(inputTelefono.getText().toString());

                boolean guardado = dbHelper.insertarPerfil(perfil);

                if (guardado)
                    Toast.makeText(Inicio.this, " Datos guardados correctamente", Toast.LENGTH_SHORT).show();
                else
                    Toast.makeText(Inicio.this, " Error al guardar los datos", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
