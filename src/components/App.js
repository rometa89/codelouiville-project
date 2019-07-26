import React, { Component } from 'react';
import { 
     BrowserRouter,
     Route
} from 'react-router-dom';
import axios from 'axios';



// App components
import Header from './Header';
import Nav from './Nav';
import Pizza from './MenuList/Pizza';
import Chinese from './MenuList/Chinese';
import Mexican from './MenuList/Mexican';
import Desert from './MenuList/Desert';
import RecipeList from './Recipes/RecipeList';
import SearchForm from './Recipes/SearchForm';
import People from './Persons/People';
import PersonTitle from './Persons/PersonTitle';
import Titles from './Weather/Titles';
import WeatherForm from './Weather/WeatherForm';
import Weather from './Weather/Weather';



// Recipe api key //
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

              temperature: undefined,
              city: undefined,
              country: undefined,
              humidity: undefined,
              description: undefined,
              error: undefined
              
          }
      }

     async componentDidMount() {
         this.performSearch('chicken');
          this.userInfo();
          // this.getWeather();
     }

     // Function to display recipes list
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

     // Functions for the user data

     userInfo = async () => {
               const url = "https://api.randomuser.me/?results=5";
               const response = await fetch(url);
               const data = await response.json();
               this.setState({people: data.results})
     }

     // Function used to display weather conditions

     getWeather = async (e) => {
          e.preventDefault();
          const city = e.target.elements.city.value;
          const country = e.target.elements.country.value;
          const wea_api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEA_API_KEY}&units=metric`);
          const data = await wea_api_call.json();

          if(city && country) {
               this.setState({
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    error: ""
               });
               
          } else{
               this.setState({ error: "Please enter the values" });
          }
     }

     render() {  
          return (
               <BrowserRouter>
                    <div className="container-fluid">
                         <Header />
                         <div className="row main-content">
                              <div className="col-lg-8">
                                   <Nav />

                                   {/* Navigable Routes */}

                                   <Route exact path="/" component={Pizza} />
                                   <Route path="/chinese" component={Chinese} />
                                   <Route path="/mexican" component={Mexican} />
                                   <Route path="/desert" component={Desert} />

                                   <div className="testimonials">
                                        <PersonTitle />
                                        
                                        <div className="row">
                                             <People people={this.state.people} />
                                        </div>
                                   </div>
                                   
                              </div>
                              
                              <div className="col-lg-4">
                                   <div className="recipe-content">
                                        <SearchForm onSearch={this.performSearch} />
                                   
                                        <RecipeList recipes={this.state.recipes} />
                                   </div>
                                   

                                   <div className="weather-content">
                                        <Titles />
                                        <WeatherForm loadWeather={this.getWeather} />
                                        <Weather temperature={this.state.temperature}
                                                  city={this.state.city}
                                                  country={this.state.country}
                                                  humidity={this.state.humidity}
                                                  description={this.state.description}
                                                  error={this.state.error} 
                                        />                                                      
                                   </div>
                              </div>

                         </div>

                    </div>

               </BrowserRouter>
          );
     }
}

export default App;
