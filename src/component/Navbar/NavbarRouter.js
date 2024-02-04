import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Menu } from "antd";

const SidebarLayout = ({ theme }) => {
    function getItem(label, key, icon, children, type) {
      return {
        key,
        icon,
        children,
        label,
        type,
      };
    }

    const items = [

    
      
        getItem( [
          getItem(<Link to="/home"></Link>, "temp0" ),
          getItem(<Link to="/about"></Link>,  "temp1"),
         
          getItem(<Link to="/service"></Link>, "temp2" ),
          
        ] ),
    ]

}  
export default withRouter(SidebarLayout);