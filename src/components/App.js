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
import SearchForm from './SearchForm';
import People from './Persons/People';



const API_KEY = "093bdf9999e73c83bd9ac1b94e63b4db";

class App extends Component {

     constructor() {
          super();
          this.state = {
              recipes: [],
              people: []
          }
      }

     async componentDidMount() {
         this.performSearch('chicken');

         const url = "https://api.randomuser.me/?results=6";
          const response = await fetch(url);
          const data = await response.json();
          console.log('Random person data:');
          console.log(data.results);
          this.setState({people: data.results})
     }

     performSearch = (query = 'pizza') => {
          // Make a request for a user with a given ID
          axios.get(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${query}&count=4`)
          .then(response => {
               if(response.data.error === undefined) {
                    this.setState({ 
                    recipes: response.data.recipes 
                    });
               }
               else {
                    console.log('Error fetching recipe data: ' + response.data.error)
               }
          })
          .catch(error => {
               // handle error
               console.log('Error fetching and parsing data', error);
          });
     }

     render() {
          console.log(this.state.recipes);
          console.log(this.state.people);
          
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
                                   <div className="search-form">
                                        <SearchForm onSearch={this.performSearch} />
                                   </div>
                                   
                                        <RecipeList recipes={this.state.recipes} />
                                   
                                   {/* <div>
                                        <div>
                                             {this.state.person.name.title}
                                        </div>
                                        <div>
                                             {this.state.person.name.first}
                                        </div>
                                   </div> */}
                                  
                                  
                              </div>

                         </div>

                    </div>

                    <div className="col-md-12">
                         <div className="testimonials">
                              <People people={this.state.people} />
                         </div>
                    </div>

               </BrowserRouter>
          );
     }
}

export default App;
