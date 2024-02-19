import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social">
          <div className="soci">
            <FaGithub />
          </div>
          <div className="soci">
            <FaLinkedin />
          </div>
          <div className="soci">
            <FaFacebook />
          </div>
        </div>
      </div>
      <div className="copyright">Copyright &copy; 2024. Fatih Aksoy</div>
    </footer>
  );
};

export default Footer;
