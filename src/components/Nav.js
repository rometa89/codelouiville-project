import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class Nav extends Component {
    render() {

        return(
            
            //  Navigable Links
            <nav className="nav-wrap">
                <ul className="nav nav-tabs">
                    <li><NavLink exact to="/">Pizza</NavLink></li>
                    <li><NavLink to="/chinese">Chinese</NavLink></li>
                    <li><NavLink to="/mexican">Mexican</NavLink></li>
                    <li><NavLink to="/desert">Desert</NavLink></li>
                </ul> 
    
            </nav>
        );
       
    }
 
}


export default Nav;