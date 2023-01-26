//Rellenamos el Título
document.getElementById("h1").innerHTML = "JavaScript"

//Rellenamos el contenido de los parrafos
document.getElementById("p1").innerHTML = "JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional). Lee más en acerca de JavaScript."

document.getElementById("p2").innerHTML = "Esta sección está dedicada al lenguaje JavaScript en sí, y no a las partes que son específicas de las páginas web u otros entornos host. Para información acerca de APIs específicas para páginas Web, consulta APIs Web y DOM."

document.getElementById("p3").innerHTML = "El estándar para JavaScript es ECMAScript (ECMA-262) y la especificación de la API para la Internacionalización de ECMAScript (ECMA-402). La documentación en MDN está basada enteramente en las últimas versiones preliminares de ECMA-262 y ECMA-402. Y en algunos casos donde algunas propuestas para nuevas funciones para ECMAScript ya hayan sido implementadas en los navegadores, la documentación y algunos artículos de MDN pueden hacer uso de algunas de estas funciones."

document.getElementById("p4").innerHTML = "No confundas JavaScript con el lenguaje de programación Java. Ambos \"Java\" y \"JavaScript\" son marcas o marcas registradas de Oracle en los Estados Unidos y otros países, Sin embargo, los dos lenguajes de programación tienen sintaxis, semántica y usos muy diferentes."

document.getElementById("p5").innerHTML = "Ahora veremos un ejemplo de uso de JavaScript con un botón que al pulsarlo mostrará un mensaje a traves de la función alert:"

//Texto del botón
document.getElementById("b1").innerHTML = "Pulsame"

//función para mostrar mensaje
function mensaje(){
    alert("Mensaje mostrado con JavaScript")
}

function azul(){
    document.getElementById("p3").style.color = "blue"
}

function negro(){
    document.getElementById("p3").style.color = "black"
}

console.log("Hola desde la consola")