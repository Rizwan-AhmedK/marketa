import React from "react";
import ToggleButton from "../Components/ToggleButton";
import Form  from "react-bootstrap/Form";
const ContactDetails = () => {
    return (
      <>
        <h4 style={{fontWeight: 'bold', paddingTop: '10px'}}>Contact Details</h4>
        <div style={{padding: '20px'}}>
            <span style={{fontWeight: 'bold'}}>Name on the Ad</span>
            <p style={{padding: '10px', lineHeight: '0.1'}}>Advertiser Name</p>

            <span style={{fontWeight: 'bold'}}>Email Address</span>
            <p style={{padding: '10px', lineHeight: '0.1'}}>advertisor@gmail.com</p>

            <span style={{fontWeight: 'bold'}}>Phone No</span>
            <p style={{padding: '10px', lineHeight: '0.1'}}>phone no of the advertisor</p>
           
            <span style={{fontWeight: 'bold'}}>WhatsApp</span><br /><br />
            <span style={{paddingLeft: '10px'}}>Show WhatsApp No </span>
            <ToggleButton style={{paddingLeft: '30px'}} />
            <p style={{padding: '10px', lineHeight: '0.1'}}>whatsapp link</p>

            <span style={{fontWeight: 'bold'}}>Your Location(e.g city)</span><br />
            <Form.Control style={{width: '50%', marginTop: '10px', marginBottom: '20px'}} type='text' />


            <span style={{fontWeight: 'bold', marginTop: '20px'}}>Area</span>
            <Form.Control style={{width: '50%'}} type='text' />
        </div>
      </>
    )
  }
  
  export default ContactDetails;