import React from "react";
import { Container, Button, Col } from "react-bootstrap";
import HomeBody from "./homeBody";
import Type from "./Type";




function Home() {

  return (
    <section>
      
      <Container fluid className="home-section" id="home">

          <Col className="home-title">
            <h1>VAS HOME INSPECTIONS</h1>
            <h2> <Type /> </h2>
            <Button Flex
            variant="primary"
            href="/contact-us"
            style={{ maxWidth: "250px" }}
            >
            Schedule Inspection ---- doesnt work
          </Button>
          </Col>
          
      </Container>
      <div id="contactButton">
            <Button
            variant="primary"
            href="/contact-us"
            style={{ maxWidth: "250px" }}
            >
            Schedule Inspection -- does work some how
          </Button>
          </div>
    <HomeBody />
    </section>
  );
}

export default Home;