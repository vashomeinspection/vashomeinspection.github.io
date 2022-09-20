import React from "react";
import { Container, Col} from "react-bootstrap";
import HomeBody from "./homeBody";
import Type from "./Type";
function Home() {

  return (
    <section>
      
      <Container fluid className="home-section" id="home">

          <Col className="home-title">
            <h1>VAS HOME INSPECTIONS</h1>
            <h2> <Type /> </h2>
          </Col>
      </Container>

    <HomeBody />

    </section>

  );
}

export default Home;