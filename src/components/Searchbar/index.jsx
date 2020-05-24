import React, { Component } from "react";

import styled from "./searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    value: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getNewQuery(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <header className={styled.Searchbar}>
        <form className={styled.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styled.SearchFormButton}>
            <span className={styled.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styled.SearchFormInput}
            type="text"
            name="value"
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
