import { Link } from "react-router-dom";
import Mujer from "./images/Mujercaminando.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="split-banner">
      <div className="banner-container">
        <div className="banner-text-content">
          <h1>Sal a tiempo, llega seguro. BAMO' te avisa</h1>
          <p>Una app inteligente que te dice cuando salir de casa para tomar el bus, sin esperas ni riesgos.</p>
          <Link to="/register" className="register-btn">
            Descárgala la app
          </Link>
        </div>
        <div className="banner-image-container">
          <img src={Mujer} alt="Mujercaminando" className="banner-image" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
