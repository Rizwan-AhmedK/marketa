import React from "react";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiErrorWarningLine } from "react-icons/ri";

const BreadCrumb = () => {
    return (
      <>
        <Container>
            <Row>
                <Col lg={4}>
                    <p style={{ fontWeight: 'bold', fontSize: '15px'}}>Auto Car BMW</p>
                </Col>

                <Col lg={4}>
                    <span><RiErrorWarningLine style={{fontSize: 20}} /></span>
                    <span style={{ fontWeight: 'bold', fontSize: '15px', paddingLeft: '10px'}}>This is a free category</span>
                </Col>
               
                
            </Row>
        </Container>
      </>
    )
  }
  
  export default BreadCrumb;