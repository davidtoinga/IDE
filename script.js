function verificarAcceso() {
    const pass = prompt("Introduce la contraseña para acceder:");
    if (pass === "1") {
      window.location.href = "especifica.html";
    } else {
      alert("Contraseña incorrecta");
    }
  }
  
  function verificarClave(deporte) {
    let claveCorrecta = "";
    if (deporte === "futbol") claveCorrecta = "futbol123";
    if (deporte === "baloncesto") claveCorrecta = "basket123";
  
    const pass = prompt(`Introduce la contraseña para ${deporte.toUpperCase()}:`);
    if (pass === claveCorrecta) {
      window.location.href = `${deporte}.html`;
    } else {
      alert("Contraseña incorrecta");
    }
  }
  