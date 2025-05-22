import React from "react";
import "./Premium.css";
import premiumImg from "./images/Premium.png";
import gratisImg from "./images/Gratis.png";

const Premium = () => {
    return (
        <div className="premium-wrapper">
            <div className="premium-container">
                <div className="card">
                    <img src={gratisImg} alt="No Premium" className="card-image" />
                </div>

                <div className="center-text">
                    <h2 className="contact-premium">
                        ¡Dale el impulso
                        <h1>PREMIUM</h1>
                        a tu movilidad!
                    </h2>


                    <a href="/contacto" className="contact-link premium">
                        Contáctanos <br />
                    </a>
                    <h2 className="contact-link">
                        ¿TIENES UNA DUDA, QUEJA O SUGERENCIA?
                    </h2>
                </div>

                <div className="card">
                    <img src={premiumImg} alt="Premium" className="card-image" />
                </div>
            </div>
        </div>
    );
};

export default Premium;

