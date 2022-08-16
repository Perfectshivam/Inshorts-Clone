import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/shivam-jha-037943184/" target="__blank" rel="noreferrer">
          Shivam Kumar
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
       
        <a href="https://www.linkedin.com/in/shivam-jha-037943184/" target="__blank" rel="noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/Perfectshivam" target="__blank" rel="noreferrer">
        <i class="fa-brands fa-github fa-2x"></i>        </a>
      </div>
    </div>
  );
};

export default Footer;