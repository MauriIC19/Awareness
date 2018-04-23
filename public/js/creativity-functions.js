window.addEventListener("load", cargarDatos)

contenido = {
    "pregunta1": {
        "txtPregunta": "Me gustaría que me hipnotizaran.",
        "respuestas": {
            "respuesta1": "Verdadero",
            "respuesta2": "Falso"
        },
        "puntos": {
            "puntos1": "1",
            "puntos2": "0"
        }
    },
    "pregunta2": {
        "txtPregunta": "A menudo tengo pensamientos interesantes cuando estoy medio dormido o medio despierto.",
        "respuestas": {
            "respuesta1": "Verdadero",
            "respuesta2": "Falso"
        },
        "puntos": {
            "puntos1": "1",
            "puntos2": "0"
        }
    },
    "pregunta3": {
        "txtPregunta": "Me interesan muchas cosas muy diversas y variadas, pertenecientes a campos diferentes, como el deporte, la lectura, el arte, etc.",
        "respuestas": {
            "respuesta1": "Verdadero",
            "respuesta2": "Falso"
        },
        "puntos": {
            "puntos1": "1",
            "puntos2": "0"
        }
    },
    "pregunta4": {
        "txtPregunta": "Me gusta ver formas en las nubes.",
        "respuestas": {
            "respuesta1": "Verdadero",
            "respuesta2": "Falso"
        },
        "puntos": {
            "puntos1": "1",
            "puntos2": "0"
        }
    },
    "pregunta5": {
        "txtPregunta": "Me gusta llevar a cabo varios proyectos a la vez.",
        "respuestas": {
            "respuesta1": "Verdadero",
            "respuesta2": "Falso"
        },
        "puntos": {
            "puntos1": "1",
            "puntos2": "0"
        }
    },
    "pregunta6": {
        "txtPregunta": "Tengo recursos cuando me encuentro con circunstancias impredecibles, como la llegada repentina de huéspedes, un cambio en los planes de un viaje, o un picnic espontáneo.",
        "respuestas": {
            "respuesta1": "Verdadero",
            "respuesta2": "Falso"
        },
        "puntos": {
            "puntos1": "1",
            "puntos2": "0"
        }
    },
    "pregunta7": {
        "txtPregunta": "En ocasiones experimento un deja vu.",
        "respuestas": {
            "respuesta1": "Verdadero",
            "respuesta2": "Falso"
        },
        "puntos": {
            "puntos1": "1",
            "puntos2": "0"
        }
    },
    "pregunta8": {
        "txtPregunta": "A veces, mientras estoy durmiendo, mantengo conversaciones con alguien que entra en mi habitación.",
        "respuestas": {
            "respuesta1": "Verdadero",
            "respuesta2": "Falso"
        },
        "puntos": {
            "puntos1": "1",
            "puntos2": "0"
        }
    },
    "pregunta9": {
        "txtPregunta": "Hago bromas, me río mucho y se me conoce como una persona con sentido del humor.",
        "respuestas": {
            "respuesta1": "Verdadero",
            "respuesta2": "Falso"
        },
        "puntos": {
            "puntos1": "1",
            "puntos2": "0"
        }
    },
    "pregunta10": {
        "txtPregunta": "He tenido la sensación de estar como hipnotizado mientras conducía un coche.",
        "respuestas": {
            "respuesta1": "Verdadero",
            "respuesta2": "Falso"
        },
        "puntos": {
            "puntos1": "1",
            "puntos2": "0"
        }
    },
    "pregunta11": {
        "txtPregunta": "A veces estoy tan concentrado que no escucho a los demás llamarme.",
        "respuestas": {
            "respuesta1": "Verdadero",
            "respuesta2": "Falso"
        },
        "puntos": {
            "puntos1": "1",
            "puntos2": "0"
        }
    },
    "pregunta12": {
        "txtPregunta": "He tenido la experiencia de de mirar intensamente algo hasta que lentamente o de repente se vuelve muy extraño ante mis ojos.",
        "respuestas": {
            "respuesta1": "Verdadero",
            "respuesta2": "Falso"
        },
        "puntos": {
            "puntos1": "1",
            "puntos2": "0"
        }
    },
};

function cargarDatos() {

    var contenedorPreguntas = document.getElementById("container-questions");
    var cantidadPreguntas = Object.keys(contenido).length;

    //Inicia Creación de Elementos

    for (var i = 1; i <= cantidadPreguntas; i++) {

        preguntaActual = contenido["pregunta" + i];

        divGeneral = document.createElement("div");

        divPreguntaActual = document.createElement("div");
        preguntaActualTitulo = document.createElement("p");
        preguntaActualTitulo.classList.add("pregunta");
        preguntaActualTxt = document.createTextNode(preguntaActual.txtPregunta);

        respuestasActuales = preguntaActual.respuestas;
        puntosActuales = preguntaActual.puntos;
        cantidadRespuestas = Object.keys(preguntaActual.respuestas).length;

        divRespuestasActuales = document.createElement("div");

        divRespuestasActual1 = document.createElement("div");
        divRespuestasActual2 = document.createElement("div");

        divRespuestasActual1.classList.add("custom-control");
        divRespuestasActual1.classList.add("custom-radio");
        divRespuestasActual1.classList.add("custom-control-inline");

        divRespuestasActual2.classList.add("custom-control");
        divRespuestasActual2.classList.add("custom-radio");
        divRespuestasActual2.classList.add("custom-control-inline");

        for (var j = 1; j <= cantidadRespuestas; j++) {
            opcionPreguntaActual = document.createElement("input");
            opcionPreguntaActual.classList.add("custom-control-input");
            opcionPreguntaActual.setAttribute("type", "radio");
            opcionPreguntaActual.setAttribute("name", "pregunta" + i);
            opcionPreguntaActual.setAttribute("id", "pregunta" + i + j);
            opcionPreguntaActual.setAttribute("value", puntosActuales["puntos" + j])

            opcionPreguntaActualLabel = document.createElement("label");
            opcionPreguntaActualLabel.classList.add("custom-control-label");
            opcionPreguntaActualLabel.setAttribute("for", "pregunta" + i + j);

            opcionPreguntaActualTxt = document.createTextNode(respuestasActuales["respuesta" + j])

            opcionPreguntaActualLabel.appendChild(opcionPreguntaActualTxt);

            if (j % 2 != 0) {
                divRespuestasActual1.appendChild(opcionPreguntaActual);
                divRespuestasActual1.appendChild(opcionPreguntaActualLabel);

                divRespuestasActuales.appendChild(divRespuestasActual1);
            } else {
                divRespuestasActual2.appendChild(opcionPreguntaActual);
                divRespuestasActual2.appendChild(opcionPreguntaActualLabel);

                divRespuestasActuales.appendChild(divRespuestasActual2);

            }


        }


        preguntaActualTitulo.appendChild(preguntaActualTxt);

        divPreguntaActual.appendChild(preguntaActualTitulo);

        divGeneral.appendChild(divPreguntaActual);
        divGeneral.appendChild(divRespuestasActuales);

        contenedorPreguntas.appendChild(divGeneral);

    }


    btnSumar = document.createElement("button");
    btnSumar.addEventListener("click", generarResultado);
    btnSumar.classList.add("btn");
    btnSumar.classList.add("btn-outline-dark");

    btnSumarTxt = document.createTextNode("Resultado");

    btnSumar.appendChild(btnSumarTxt);

    contenedorPreguntas.appendChild(btnSumar);

    //Finaliza Creación de Elementos
}

function generarResultado() {


    var opcionesSeleccionadas = document.querySelectorAll('input[type=radio]:checked');
    var sumaTotal = 0;

    opcionesSeleccionadas.forEach(function(elemento) {
        sumaTotal = sumaTotal + parseInt(elemento.value);
    });

    var resultado = document.getElementById("resultado");

    resultado.textContent = "";

    if (sumaTotal >= 0 && sumaTotal <= 4) {
        resultadoTxt = document.createTextNode("No eres una persona muy creativa. Prefieres la disciplina, tener todo calculado y en su sitio y no dejar nada a la imaginación. Sin embargo eres más serio y eficiente muchas veces.");
    }

    if (sumaTotal >= 5 && sumaTotal <= 8) {
        resultadoTxt = document.createTextNode("Tienes puntos de creatividad esporádicamente y tu mente es una mezcla entre el pensamiento rígido y el pensamiento creativo. Puedes hacer tareas racionales o creativas por igual.");
    }

    if (sumaTotal >= 9 && sumaTotal <= 12) {
        resultadoTxt = document.createTextNode("Eres una persona muy creativa. Seguramente te sientes feliz realizando tareas o trabajos que requieran el uso de la imaginación y el pensamiento creativo.");
    }

    resultado.appendChild(resultadoTxt);

}