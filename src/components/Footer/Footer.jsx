import React from 'react';
import {Link} from 'react-router-dom';
import "./Footer.css";

// Pentru Home, About si majoritatea paginilor ce vor fi create in urmatoarele cursuri, avem nevoie de un header
// si un footer.  Momentan, vom vrea ca footer-ul sa contina link catre pagin de About.
function Footer() {
    return(
        <div className="container d-flex justify-content-between bg-light footer-main flex-direction-column">
            <div className="p-3">
                <p>Ghidul marimilor</p>
                <p>Cum cumpar?</p>
                <p>Modalitati de plata</p>
                <p>Livrare</p>
            </div>
            <div className="p-3">
                <h6>
                    <Link to='/about' className="text-decoration-none ">About</Link>
                </h6>
                <h6>
                    <Link to='/termsAndConditions' className="text-decoration-none ">Termeni si Conditii</Link>
                </h6>
                <p>Cariera</p>
                <p>Protectia consumatorului</p>
            </div>
            <div className="p-3">
                <h6>Contul meu</h6>
                <p>Comenzile mele</p>
                <p>Datele contului</p>
                <p>Modifica parola</p>
            </div>
        </div>
    );
}

export default Footer;