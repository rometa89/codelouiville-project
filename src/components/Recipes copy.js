import React, { Component } from 'react';

import Form from './Form';
import MenuList from './MenuList';

const API_KEY = "6bf942644ff2f32b658a33ead900c2c3";


class Recipes extends Component {
    constructor() {
        super();
        this.state = {
            menuLists: []
        }
    }

    getMenuList = async (e) => {
        
       const menuListName = e.target.elements.menuListName.value;
       e.preventDefault();
       const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${menuListName}&count=10`) 
       
       const data = await api_call.json();

       this.setState({ menuLists: data.recipes })
       console.log(this.state.menuLists);
    }

    render() {
        return(
            <div className="col-lg-4">
                <Form getMenuList={this.getMenuList} />
                <MenuList recipeLists={this.state.menuLists} />
            </div>

        );
    }
}

export default Recipes;