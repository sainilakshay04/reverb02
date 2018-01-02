import React from "react";

const Header = (props) =>{
        return(
            <div className="container">
                <h2>{props.homeName}</h2>
            </div>
        );
};
export default Header;