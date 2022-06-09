import React from "react";
import Breadcrumbs from '../Components/BreadCrumbs';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GrAddCircle } from "react-icons/gr";

const Header = () => {
    return (
      <>
      <hr />
        <h4 style={{fontWeight: 'bold', paddingTop: '10px'}}>Photos</h4>
        <div style={{padding: '20px'}}>
        <p>Add upto 24 photos</p>
        <Container style={{padding: 20}}>
            <Row>
                <Col lg={4} style={{display: 'flex', alignItems: 'center',justifyContent: 'center', margin: '4px', height: '257px', border: '1px solid black'}}><GrAddCircle style={{fontSize: '40px'}} /></Col>
                <Col lg={4}>
                    <Row>
                        <Col style={{margin: '4px', height: '125px', border: '1px solid black'}}>2</Col>
                        <Col style={{margin: '4px', height: '125px', border: '1px solid black'}}>3</Col>
                    </Row>
                    <Row>
                        <Col style={{margin: '4px', height: '125px', border: '1px solid black'}}>2</Col>
                        <Col style={{margin: '4px', height: '125px', border: '1px solid black'}}>3</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </div>
        <hr />
      </>
    )
  }
  
  export default Header;