import React, { useState } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Usuario:", user, "Contraseña:", password);
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Iniciar Sesión</h1>

                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />
                    <FaUser className="icon" />
                </div>

                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label htmlFor="remember">
                        <input type="checkbox" id="remember" /> Recordar
                    </label>
                    <a href="#">Olvidar contraseña</a>
                </div>

                <button type="submit">Iniciar Sesión</button>
                <div className="register-link">
                    <p>¿No tienes una cuenta? <a href="#">Registrar</a></p>

                </div>

            </form>
        </div>
    );
};

export default LoginForm;
