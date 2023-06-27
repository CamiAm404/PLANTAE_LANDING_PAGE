/* Archivo para el codigo en javascript */
function OnScroll(){
    var header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
}

function OnBackToTopClick(){
    window.scrollTo(0,0);
}

window.addEventListener("scroll",OnScroll);

window.onload=function(){
    document.getElementById("back-to-top-img").onclick=OnBackToTopClick;
}
/*RECONOCIMIENTO DE VOZ*/
function mostrarTexto(transcript) {
  var speechOutput = document.getElementById("speechOutput");
  speechOutput.textContent = transcript;
  speechOutput.classList.add("show");
}

// Verificar si el navegador admite reconocimiento de voz
document.addEventListener('DOMContentLoaded', function() {
  // Verificar la compatibilidad del reconocimiento de voz
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = 'es';

    // Obtener referencias a los elementos del DOM
    const voiceButton = document.getElementById('voiceButton');
    const speechOutput = document.getElementById('speechOutput');

    // Iniciar el reconocimiento de voz cuando se hace clic en el botón
    voiceButton.addEventListener('click', function() {
      speechOutput.style.display = 'block'; // Mostrar el textarea al hacer clic
      recognition.start();
    });

    // Evento que se activa cuando se detecta una transcripción de voz
    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log('Transcripción de voz:', transcript);
      mostrarTexto(transcript);

      // Verificar el texto de voz y navegar a la sección correspondiente
    if (transcript.includes('sección nuestra app')) {
        window.location.href = '#nuestra_app';
      } else if (transcript.includes('sección características')) {
        window.location.href = '#tercera_parte';
      } else if (transcript.includes('sección interfaz')) {
        window.location.href = '#interfaz';
      } else if (transcript.includes('sección planes')) {
        window.location.href = '#planes_voz';
      } else if (transcript.includes('sección contáctanos')) {
        window.location.href = '#footer';
      }
    };
  } else {
    console.log('El reconocimiento de voz no es compatible con este navegador.');
  }
});
