import React, { Component } from "react";
import Loader from "react-loader-spinner";

import Searchbar from "../Searchbar";
import ImageGallery from "../ImageGallery";
import Button from "../Button";
import Modal from "../Modal";

import styled from "./app.module.css";

import fetch from "../../services/api";
import { formatData } from "../../utils/helper";

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    isPending: false,
    query: "",
    isModalOpen: false,
    modalImageUrl: "",
  };

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyCloseModal);
  }

  componentWillMount() {
    window.removeEventListener("keydown", this.onKeyCloseModal);
  }

  onKeyCloseModal = (e) => {
    if (e.code === "Escape") {
      this.setState({ isModalOpen: false, modalImageUrl: "" });
    }
  };

  onOpenModal = (e) =>
    this.setState({
      isModalOpen: true,
      modalImageUrl: e.target.dataset.largeUrl,
    });

  onCloseModal = (e) => {
    if (e.target.tagName !== "IMG") {
      this.setState({ isModalOpen: false, modalImageUrl: "" });
    }
  };

  getNewQuery = (query) => {
    this.setState({ isPending: true });
    fetch(query)
      .then(({ data }) => {
        this.setState({
          images: [...formatData(data)],
          query,
        });
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isPending: false }));
  };

  loadMore = () => {
    this.setState({ isPending: true });
    fetch(this.state.query, this.state.page + 1)
      .then(({ data }) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...formatData(data)],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => console.log(error))
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
        this.setState({ isPending: false });
      });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { images, isPending, isModalOpen, modalImageUrl } = this.state;
    return (
      <>
        <Searchbar getNewQuery={this.getNewQuery} />

        {!!images.length && (
          <ImageGallery onOpenModal={this.onOpenModal} images={images} />
        )}
        {isPending && (
          <div className={styled.Loader}>
            <Loader type="Oval" color="blue" height={100} width={100} />
          </div>
        )}

        {!!images.length && <Button handleClick={this.loadMore} />}

        {isModalOpen && (
          <Modal url={modalImageUrl} onCloseModal={this.onCloseModal} />
        )}
      </>
    );
  }
}
