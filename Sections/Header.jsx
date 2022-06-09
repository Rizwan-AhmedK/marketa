import React from "react";
import Breadcrumbs from '../Components/BreadCrumbs' 

const Header = () => {
    return (
      <>
        <h2 style={{fontWeight: 'bold', padding: '15px'}}>Selected Category</h2>
        <Breadcrumbs />

      </>
    )
  }
  
  export default Header;