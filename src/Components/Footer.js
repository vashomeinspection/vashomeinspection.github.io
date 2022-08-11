import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col  className="footer-designed">
                    <h4>Designed and Developed by Alexandra Salas for Vas Home Inspections LLC.</h4>
                </Col>
                <Col className="footer-copywright">
                    <h4>Copyright {year} VHI LLC. </h4>
                </Col>
                
            </Row>
        </Container>
    );
}

export default Footer;