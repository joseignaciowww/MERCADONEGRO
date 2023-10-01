function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const contrasena = document.getElementById("contrasena").value;

    if (nombre === "usuario" && contrasena === "contraseña") {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }

    // Evita que el formulario se envíe
    return false;
}