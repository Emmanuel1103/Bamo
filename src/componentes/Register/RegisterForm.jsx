import React, { useState } from "react";
import "./RegisterForm.css";
import { FaUser, FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const RegisterForm = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Usuario:", user, "Contraseña:", password, "Correo:", email, "Teléfono:", phone, "Ciudad:", city);
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Regístrate</h1>
                
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
                
                <div className="input-box">
                    <input 
                        type="email" 
                        placeholder="Correo" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <MdEmail className="icon" />
                </div>
                
                <div className="input-box">
                    <input 
                        type="number" 
                        placeholder="Número celular" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                    />
                    <FaPhoneAlt className="icon" />
                </div>

                <div className="input-box">
                    <select value={city} onChange={(e) => setCity(e.target.value)} required>
                        <option value="">Selecciona tu ciudad</option>
                        <option value="bogota">Bogotá</option>
                        <option value="medellin">Medellín</option>
                        <option value="cali">Cali</option>
                        <option value="barranquilla">Barranquilla</option>
                        <option value="cartagena">Cartagena</option>
                    </select>
                </div>

                <button type="submit">Registrar</button>

                <div className="register-link">
                    <p>¿Ya tienes una cuenta? <a href="#">Iniciar sesion</a></p>
                    
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
