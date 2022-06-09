import React from "react";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Gallery from "../Sections/Gallery";
import Details from "./Details";
import Features from "./Features";
import Price from "./Price";
import ContactDetails from "./ContactDetails";
import Options from "./Options";

const MainContainer = () => {
    return(
    <Container>
        <Row>
            <Col lg={1}></Col>
            <Col lg={8} className="shadow-lg"  style={{backgroundColor: "white"}}>
                <Header />
                <Gallery />
                <Details />
                <Features />
                <Price />
                <ContactDetails />
                <Options />
            </Col>
            <Col lg={3}></Col>
        </Row>
    </Container>
    )
}

export default MainContainer;