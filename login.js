function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        // Si la autenticación es correcta, redirige a la página específica.
        window.location.href = "especifica.html";
      })
      .catch((error) => {
        errorMsg.innerText = "Error: " + error.message;
      });
  }  