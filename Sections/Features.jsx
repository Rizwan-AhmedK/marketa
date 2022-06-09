import React from "react";
import  Form  from "react-bootstrap/Form";
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

const Features = () => {
    return (
      <>
        <h4 style={{fontWeight: 'bold', paddingTop: '10px'}}>Features</h4>
        <Form style={{width: '50%'}}>
        <div style={{ padding: '20px'}}>
            <Form.Label style={{fontWeight: 'bold', paddingTop: '20px'}}>Transmission</Form.Label>
            <Dropdown style={{width: '50%'}}
                placeholder="Select an option"
                className="my-className"
                options={['one', 'two', 'three']}
                value="one"
                onChange={(value) => console.log('change!', value)}
                onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
                onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                onOpen={() => console.log('open!')}
                />;

                <Form.Label style={{fontWeight: 'bold', paddingTop: '20px'}}>Fuel Type</Form.Label>
                <Dropdown style={{width: '50%'}}
                    placeholder="Select an option"
                    className="my-className"
                    options={['one', 'two', 'three']}
                    value="one"
                    onChange={(value) => console.log('change!', value)}
                    onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
                    onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                    onOpen={() => console.log('open!')}
                    />;

                <Form.Label style={{fontWeight: 'bold', paddingTop: '20px'}}>Build Year</Form.Label>
                <Dropdown style={{width: '50%'}}
                    placeholder="Select an option"
                    className="my-className"
                    options={['one', 'two', 'three']}
                    value="one"
                    onChange={(value) => console.log('change!', value)}
                    onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
                    onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                    onOpen={() => console.log('open!')}
                />;

                <Form.Label style={{fontWeight: 'bold', paddingTop: '20px'}}>Color</Form.Label>
                <Dropdown style={{width: '50%'}}
                    placeholder="Select an option"
                    className="my-className"
                    options={['one', 'two', 'three']}
                    value="one"
                    onChange={(value) => console.log('change!', value)}
                    onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
                    onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                    onOpen={() => console.log('open!')}
                />;

                <Form.Label style={{fontWeight: 'bold', paddingTop: '20px'}}>Milage</Form.Label>
                <Dropdown style={{width: '50%'}}
                    placeholder="Select an option"
                    className="my-className"
                    options={['one', 'two', 'three']}
                    value="one"
                    onChange={(value) => console.log('change!', value)}
                    onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
                    onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                    onOpen={() => console.log('open!')}
                />;
                </div>

        <h4 style={{fontWeight: 'bold', paddingTop: '10px'}}>Maintanance</h4>


                <Form.Check style={{fontWeight: 'bold'}}
                    id={`checkbox`}
                    label={`Maintained by Company`}
                />

        </Form>
      </>
    )
  }
  
  export default Features;