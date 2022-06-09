import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Options = () => {
    return (
      <>
        <h4 style={{fontWeight: 'bold', paddingTop: '10px'}}>Options</h4>
        <Container>
            <Row>
                <Col lg={4}>
                    <Form.Check id={`checkbox`} label={`4 x 4`}/>
                    <Form.Check id={`checkbox`} label={`ABS`}/>
                    <Form.Check id={`checkbox`} label={`Adaptive lights`}/>
                </Col>
                <Col lg={4}>
                    <Form.Check id={`checkbox`} label={`Electric Seat Adjustment`}/>
                    <Form.Check id={`checkbox`} label={`Electrical Stability Program(ESP)`}/>
                    <Form.Check id={`checkbox`} label={`Emergency Break assist`}/>
                </Col>
                <Col lg={4}>
                    <Form.Check id={`checkbox`} label={`Sports package`}/>
                    <Form.Check id={`checkbox`} label={`Sports Seats`}/>
                    <Form.Check id={`checkbox`} label={`Voice control`}/>
                </Col>
            </Row>
            <Row style={{marginTop: '40px', marginBottom: '40px'}}>
                <Col>
                    <Button style={{padding: '15px 80px 15px 80px', marginRight: '15px', fontSize: '20px'}} className="btn btn-secondary shadow-lg">Preview Ad</Button>
                </Col>
                <Col>
                    <Button style={{padding: '15px 80px 15px 80px', marginRight: '15px', fontSize: '20px', backgroundColor: '#137BCB'}} className="btn-primary shadow-lg">Place Ad</Button>
                 </Col>
            </Row>
        </Container>

      </>
    )
  }
  
  export default Options;