const Login = () => {
    const button = document.getElementById("login");

const mailElement = document.getElementById("mail");
const passwordElement = document.getElementById("password");

button.addEventListener("click", () => {
  const mail = mailElement.value;
  const password = passwordElement.value;

  if (mail && password) {
    const objetoBody = {
      mail: mail,
      password: password,
    };

    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetoBody),
    })

      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        debugger;

        if (!response.error) {
          localStorage.setItem("token", response.token);

          alert("Login exitoso");
        } else {
          alert("Login fallido");
        }
      });
  } else {
    alert("Falta completar campos");
  }
});

    return (
        <form >
            <log-in>Iniciar Sesión</log-in>
            <div method="POST" >
                <input type="email" name="email" id="mail" required value placeholder="E-Mail"/>
                <input type="password" name="password" id="password" value placeholder="Contraseña"/>
                <button id="login">Ingresar</button>
                <button id="registro">Registrarse</button>
            </div>
            
        </form>
    );
};

export default Login;