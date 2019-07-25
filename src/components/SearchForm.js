
import React, { Component } from 'react';

export default class SearchForm extends Component {
    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit} >
                <div className="form-group">
                    {/* <label className="is-hidden" htmlFor="search">Search</label> */}
                        <input type="search" 
                                className="form-control"
                                onChange={this.onSearchChange} 
                                name="search" 
                                ref={(input) => this.query = input}
                                placeholder="search..." />
                </div>
                
                <button type="submit" className="btn btn btn-danger search-button">Search</button>
            </form>
        );
    }
}
