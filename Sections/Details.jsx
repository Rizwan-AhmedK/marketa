import React from "react";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaBold, FaItalic, FaUnderline, FaAlignLeft, FaAlignRight, FaAlignCenter } from "react-icons/fa";

const Details = () => {
    return (
      <>
        <h4 style={{fontWeight: 'bold', paddingTop: '10px'}}>Details</h4>
        <Form style={{padding: '20px'}}>
        <Form.Label style={{fontWeight: 'bold'}}>Title</Form.Label>
        <Form.Control style={{width: '50%', marginBottom: '25px'}} type="text" />

        <Form.Label style={{fontWeight: 'bold'}}>Description</Form.Label>
        <Container>
          <Row>
            <Col sm={1}><FaBold /></Col>
            <Col sm={1}><FaItalic /></Col>
            <Col sm={1}><FaUnderline /></Col>
            <Col sm={1}><FaAlignLeft /></Col>
            <Col sm={1}><FaAlignCenter /></Col>
            <Col sm={1}><FaAlignRight /></Col>
          </Row>
        </Container>
        <br />
        <textarea style={{width: '50%', height: '150px', resize: 'none'}}></textarea>
        </Form>

      </>
    )
  }
  
  export default Details;