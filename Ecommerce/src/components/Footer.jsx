import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} Eflyer. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
