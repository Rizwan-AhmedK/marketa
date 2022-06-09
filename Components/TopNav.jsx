import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const TopNav = () => {
    return(
        <>
       <Navbar bg="white" expand="lg" style={{marginBottom: '50px'}}>
  <Container fluid style={{padding: '20px'}}>
    <Navbar.Brand style={{paddingLeft: '15px', color: '#137BCB', fontWeight: 'bold', fontSize: '30px'}} href="#">Marketa</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav 
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px',  paddingLeft: '280PX', fontSize: '20px'}}
        navbarScroll
      >
        <Nav.Link href="#action1">Help</Nav.Link>
        <Nav.Link href="#action2">Register</Nav.Link>
      </Nav>
        <Nav.Link style={{fontSize: '20px', color: 'gray', paddingRight: '60px'}} href="#">Login</Nav.Link>
        <Button style={{padding: '15px 60px 15px 60px', marginRight: '15px', fontSize: '20px', backgroundColor: '#137BCB'}} className="btn-primary shadow-lg">Post an Ad</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </>
    )
}

export default TopNav;