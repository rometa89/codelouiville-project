import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class Nav extends Component {
    render() {
        return(
        //  Nav tabs
        <nav className="nav-wrap">
            <ul className="nav nav-tabs">
                <li><NavLink exact to="/">Pizza</NavLink></li>
                <li><NavLink to="/chinese">Chinese</NavLink></li>
                <li><NavLink to="/mexican">Mexican</NavLink></li>
                <li><NavLink to="/desert">Desert</NavLink></li>
            </ul> 

            
            
            {/* <MenuList recipeLists={this.state.menuLists} /> */}
        
        </nav>
        );
       
    }
 
}


export default Nav;