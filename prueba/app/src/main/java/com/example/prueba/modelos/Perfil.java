package com.example.prueba.modelos;

public class Perfil {
    private int id;
    private String nombre;
    private String apellido;
    private int edad;
    private String domicilio;
    private String estudios;
    private String correo;
    private String telefono;

    public Perfil() {}

    public Perfil(int id, String nombre, String apellido, int edad,
                  String domicilio, String estudios, String correo, String telefono) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.domicilio = domicilio;
        this.estudios = estudios;
        this.correo = correo;
        this.telefono = telefono;
    }

    // Getters y Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getApellido() { return apellido; }
    public void setApellido(String apellido) { this.apellido = apellido; }

    public int getEdad() { return edad; }
    public void setEdad(int edad) { this.edad = edad; }

    public String getDomicilio() { return domicilio; }
    public void setDomicilio(String domicilio) { this.domicilio = domicilio; }

    public String getEstudios() { return estudios; }
    public void setEstudios(String estudios) { this.estudios = estudios; }

    public String getCorreo() { return correo; }
    public void setCorreo(String correo) { this.correo = correo; }

    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }
}
