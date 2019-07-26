import React from 'react';


const People = props => {
    return props.people.map((person) => {
        return(
            <div className="col-md-3">
                <div key={person.login.uuid} className="userList">
                
                    <div className="user-img">
                        <img src={person.picture.large} alt="" />
                    </div>

                    <div className="user-desc">
                        <div className="user-name">
                            <h2> {person.name.first} {person.name.last}</h2>
                        </div>

                        <div className="user-email">
                            <p> { person.email } </p>
                        </div>

                        <div className="user-loc">
                            <p> {person.location.street} </p>
                            <p> {person.location.city} </p>
                            <p> {person.location.state} </p>
                        </div>
                    </div> 
                </div>
            </div>
            
        );
    })
  
}

export default People; 