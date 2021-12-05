import React, { useState, useEffect } from "react";

const Header = (props) => {
    return (
        <div className="header">
            {props.heading}
        </div>
    );
}

export default Header;