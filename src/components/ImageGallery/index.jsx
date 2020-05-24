import React from "react";

import ImageGalleryItem from "./ImageGalleryItem";
import styled from "./imageGallery.module.css";

const ImageGallery = ({ onOpenModal, images }) => (
  <ul className={styled.ImageGallery}>
    {images.map(({ webformatURL, id, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        largeUrl={largeImageURL}
        url={webformatURL}
        onOpenModal={onOpenModal}
      />
    ))}
  </ul>
);

export default ImageGallery;
