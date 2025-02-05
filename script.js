// script.js

// Función que actualiza el color y el código hexadecimal
function actualizarColor() {
    // Obtener los valores RGB de los controles
    let rojo = document.getElementById("rojo").value;
    let verde = document.getElementById("verde").value;
    let azul = document.getElementById("azul").value;

    // Mostrar los valores de los controles
    document.getElementById("valorRojo").textContent = rojo;
    document.getElementById("valorVerde").textContent = verde;
    document.getElementById("valorAzul").textContent = azul;

    // Calcular el código hexadecimal
    let hexRojo = parseInt(rojo).toString(16).padStart(2, '0');
    let hexVerde = parseInt(verde).toString(16).padStart(2, '0');
    let hexAzul = parseInt(azul).toString(16).padStart(2, '0');

    // Código hexadecimal
    let hexColor = `#${hexRojo}${hexVerde}${hexAzul}`;

    // Mostrar el color en el recuadro y el código hexadecimal
    document.getElementById("colorDisplay").style.backgroundColor = hexColor;
    document.getElementById("hexCode").value = hexColor;

    // Actualizar los campos de texto para mostrar los valores RGB en decimal
    document.getElementById("inputRojo").value = rojo;
    document.getElementById("inputVerde").value = verde;
    document.getElementById("inputAzul").value = azul;

    // Actualizar el valor del color picker
    document.getElementById("colorPicker").value = hexColor;
}

// Función para sincronizar los valores de los campos de texto con los controles deslizantes
function sincronizarValores() {
    let rojo = document.getElementById("inputRojo").value;
    let verde = document.getElementById("inputVerde").value;
    let azul = document.getElementById("inputAzul").value;

    // Asegurarse de que los valores estén dentro del rango 0-255
    if (rojo >= 0 && rojo <= 255) {
        document.getElementById("rojo").value = rojo;
    }
    if (verde >= 0 && verde <= 255) {
        document.getElementById("verde").value = verde;
    }
    if (azul >= 0 && azul <= 255) {
        document.getElementById("azul").value = azul;
    }

    // Llamar a la función para actualizar el color y el código hexadecimal
    actualizarColor();
}

// Función para manejar el cambio del color picker
function colorPickerChange() {
    let color = document.getElementById("colorPicker").value;
    // Convertir el valor del color picker (hex) a RGB
    let rgb = hexToRgb(color);
    // Actualizar los controles y el recuadro
    document.getElementById("rojo").value = rgb.r;
    document.getElementById("verde").value = rgb.g;
    document.getElementById("azul").value = rgb.b;
    sincronizarValores();
}

// Función para convertir un código hexadecimal a RGB
function hexToRgb(hex) {
    // Eliminar el símbolo # si está presente
    hex = hex.replace('#', '');
    
    // Convertir los valores hexadecimales a RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return { r: r, g: g, b: b };
}

// Asignar eventos a los controles para actualizar el color
document.getElementById("rojo").addEventListener("input", actualizarColor);
document.getElementById("verde").addEventListener("input", actualizarColor);
document.getElementById("azul").addEventListener("input", actualizarColor);

// Asignar eventos a los campos de texto para sincronizar con los controles
document.getElementById("inputRojo").addEventListener("input", sincronizarValores);
document.getElementById("inputVerde").addEventListener("input", sincronizarValores);
document.getElementById("inputAzul").addEventListener("input", sincronizarValores);

// Asignar evento al color picker para cambiar el color
document.getElementById("colorPicker").addEventListener("input", colorPickerChange);

// Llamar a la función para establecer el valor inicial
actualizarColor();
