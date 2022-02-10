import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// Pentru Home, About si majoritatea paginilor ce vor fi create in urmatoarele cursuri, avem nevoie de un header
// si un footer.  Momentan, vom vrea ca footer-ul sa contina link catre pagin de About.
function Footer() {
  return (
    <div className="container mb-3 d-flex justify-content-between bg-light border border-danger rounded shadow-lg footer-main flex-direction-column mt-3">
      <div className="p-3">
        <h4>Marin Stefan Daniel</h4>
        <h5>The 90's Store React course project 2</h5>
        <h5>No rights Reserved &copy; 2022</h5>
      </div>
      <div className="p-3">
        <h5>
          <Link to="/about" className="text-decoration-none">
            About
          </Link>
        </h5>
        <h5>&#9743; +40734576702</h5>
        <h5>&#9993; stefann06@yahoo.com</h5>
      </div>
      <div className="p-3">
        <h5>
          Follow me on &nbsp;
          <a
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/marinstefan"
          >
            LinkedIn
          </a>
        </h5>
        <h5>
          I'm on &nbsp;
          <a
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/marin-stefan"
          >
            GitHub
          </a>
        </h5>
        <h5>
          Theese are my &nbsp;
          <a
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
            href="https://marinstefan.herokuapp.com"
          >
            Projects
          </a>
        </h5>
      </div>
    </div>
  );
}

export default Footer;
