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
import Titles from './Weather/Titles';
import WeatherForm from './Weather/WeatherForm';
import Weather from './Weather/Weather';



// Food api key //
const API_KEY = "093bdf9999e73c83bd9ac1b94e63b4db";

// Weather api-key //
const WEA_API_KEY = "8eba6662008583705a4216334df1aae0";

class App extends Component {

     constructor() {
          super();
          this.state = {
          //state for food api //
              recipes: [],

          //state for randomuser api //
              people: [],

          //state for weather api //

          //     temperature: undefined,
          //     city: undefined,
          //     country: undefined,
          //     humidity: undefined,
          //     description: undefined,
          //     error: undefined
          //     }
          }
      }

     async componentDidMount() {
         this.performSearch('chicken');
          this.userInfo();
          this.getWeather();
     }

     performSearch = (query = 'pizza') => {
          // Make a request for a user with a given ID
          axios.get(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${query}&count=3`)
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
   userInfo = async () => {
          const url = "https://api.randomuser.me/?results=6";
          const response = await fetch(url);
          const data = await response.json();
          console.log('Random person data:');
          console.log(data.results);
          this.setState({people: data.results})
   }
     
     getWeather = async (e) => {
          // const city = e.target.elements.city.value;
          // const country = e.target.elements.country.value;
          const wea_api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${WEA_API_KEY}&units=metric`);
          const data = await wea_api_call.json();
          console.log(data);
     }

     render() {  
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

                                   <div className="testimonials">
                                        <People people={this.state.people} />
                                   </div>
                                   
                              </div>
                              
                              <div className="col-lg-4">
                                   <div className="search-form">
                                        <SearchForm onSearch={this.performSearch} />
                                   </div>
                                   
                                        <RecipeList recipes={this.state.recipes} />

                                        <div className="weather-content">
                                             <Titles />
                                             <WeatherForm getWeather={this.getWeather} />
                                             <Weather />
                                        </div>
                              </div>

                         </div>

                    </div>

               </BrowserRouter>
          );
     }
}

export default App;
