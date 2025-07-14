function loginYRegistrar() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const codigo = document.getElementById("promo-code").value.trim().toUpperCase();
  const errorMsg = document.getElementById("error-msg");

  // Lista de códigos válidos
  const codigosValidos = ["FUTBOL10", "BASKET15", "PROMO2025"];

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      const user = firebase.auth().currentUser;

      // Si el usuario ingresó un código
      if (codigo !== "") {
        if (!codigosValidos.includes(codigo)) {
          throw new Error("Código inválido. Por favor, verifica e intenta de nuevo.");
        }

        const userData = {
          email: user.email,
          code: codigo,
          timestamp: new Date().toISOString()
        };

        // Guardar el código y luego redirigir
        return firebase.database().ref("codigos-descuento").push(userData);
      }

      // Si no hay código, saltarse el guardado
      return;
    })
    .then(() => {
      // Redirige siempre al final
      window.location.href = "especifica.html";
    })
    .catch((error) => {
      errorMsg.innerText = "Error: " + error.message;
    });
}