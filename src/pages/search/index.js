import React, { Component } from "react";
import axios from "axios";
import './Search.css';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      searchResult: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  onSubmit = async (event) => {
    axios
      .get("//api.giphy.com/v1/gifs/search", {
        params: {
          api_key: process.env.REACT_APP_GIPHY_CLIENTID,
          q: `${this.state.searchQuery}`,
          limit: 12,
          offset: 0,
          // rating: 'g',
          // lang: 'en',
          // random_id: "e826c9fc5c929e0d6c6d423841a282aa",
        },
      })
      .then((response) => {
        const data = response.data.data;
        console.log(data);
        this.setState({
          searchResult: data,
        });
        console.log("search result =  ", this.state.searchResult);
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  render() {
    return (
      <div className="Home">
        <form onSubmit={this.onSubmit}>
          <input type="text" id="inpuText" onChange={this.handleChange} />
          <button type="submit" value="submit">
            Submit
          </button>
          <ul>
            <li>
              {this.state.searchResult.map((item) => (
                <img className="images" src={item.images.original.url} />
              ))}
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Index;
