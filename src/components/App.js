import React, { Component } from 'react';
import { 
     BrowserRouter,
     Route
} from 'react-router-dom';
import axios from 'axios';



// App components
import Header from './Header';
import Nav from './Nav';
import Pizza from './Pizza';
import Chinese from './Chinese';
import Mexican from './Mexican';
import Desert from './Desert';
import RecipeList from './RecipeList';
import Form from './Form'



const API_KEY = "6bf942644ff2f32b658a33ead900c2c3";

class App extends Component {

     constructor() {
          super();
          this.state = {
              recipes: []
          }
      }

     componentDidMount() {
         
          // Make a request for a user with a given ID
          axios.get(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=10`)
          .then(response => {
                    this.setState({ 
                    recipes: response.data.recipes 
                    });
          })
          .catch(error => {
               // handle error
               console.log('Error fetching and parsing data', error);
          });
     }

     render() {
          console.log(this.state.recipes);
          
          return (
               <BrowserRouter>
                    <div className="container-fluid">
                         <Header />
                         <div className="row main-content">
                              <div className="col-lg-8">
                                   <Nav />
                                   <Route exact path="/" component={Pizza} />
                                   <Route path="/chinese" component={Chinese} />
                                   <Route path="/mexican" component={Mexican} />
                                   <Route path="/desert" component={Desert} />
                              </div>
                              
                              <div className="col-lg-4">
                                   <Form getMenuList={this.getMenuList} />
                                   <RecipeList data={this.state.recipes} />
                              </div>

                         </div>

                    </div>

               </BrowserRouter>
          );
     }
}

export default App;
