import React from "react";
import { Container, Button, Col } from "react-bootstrap";
import HomeBody from "./homeBody";
import Type from "./Type";

import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  return (
    <section>
      <Container fluid className="home-section" id="home">
          <Col className="home-title">
            <h1>VAS HOME INSPECTIONS</h1>
            <h2> <Type /> </h2>
          </Col>
          <Button
            variant="primary"
            href={"/about"}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            &nbsp;Download CV
          </Button>
      </Container>
      <HomeBody />
    </section>
  );
}

export default Home;