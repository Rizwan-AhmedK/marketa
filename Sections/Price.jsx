import React from "react";
import  Form  from "react-bootstrap/Form";
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

const Price = () => {
    return (
      <>
        <h4 style={{fontWeight: 'bold', paddingTop: '20px'}}>Price</h4>
        <Form style={{width: '50%'}}>
            <div style={{ padding: '10px'}}>
                <Form.Label style={{fontWeight: 'bold', paddingTop: '20px'}}>Price Type</Form.Label>
                <Dropdown style={{width: '50%'}}
                    placeholder="asking Price (negotiable)"
                    className="my-className"
                    options={['one', 'two', 'three']}
                    value="one"
                    onChange={(value) => console.log('change!', value)}
                    onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
                    onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                    onOpen={() => console.log('open!')}
                    /> 

                <Form.Control placeholder="0.00" style={{width: '100%', marginBottom: '25px', marginTop: '20px'}} type="number" />
            </div>
        </Form>
      </>
    )
  }
  
  export default Price;