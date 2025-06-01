import React from "react";
import logo from "../../assets/logo.png";
import { Modal } from "react-bootstrap";

const AboutUs = (props) => {
  const closeAboutModal = () => {
    props.unDisplayAboutModal(false);
  };
  return (
    <Modal size="md" show={props.showAbout} onHide={closeAboutModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={logo} alt="..." style={{ width: "33%" }} />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ padding: "2rem 4rem" }}>
        <div style={{ fontFamily: "Karla,sans-serif" }}>
          <h4 className="mt-3 mb-0 font-weight-bold text-center">
            L'équipe S2 Boutique
          </h4>
          <div className="d-flex justify-content-center">
            <small className="text-secondary">Développé par Amine, Hamza et Badreddine</small>
          </div>
          <div className="d-flex justify-content-center mt-3"></div>
          <p className="mt-3 text-center">
            Nous sommes une équipe MERN Fullstack JavaScript, passionnée par l'apprentissage continu, la rigueur et la volonté de livrer des solutions de qualité. Nous mettons l'accent sur le travail collaboratif et l'amélioration constante de nos compétences pour offrir le meilleur à la communauté.
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AboutUs;
