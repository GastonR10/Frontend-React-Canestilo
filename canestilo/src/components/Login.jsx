const Login = () => {
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