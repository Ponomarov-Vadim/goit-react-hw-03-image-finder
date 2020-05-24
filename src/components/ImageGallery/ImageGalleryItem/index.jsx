import React from "react";

import styled from "./imageGalleryItem.module.css";

const ImageGalleryItem = ({ onOpenModal, url, largeUrl }) => (
  <li className={styled.ImageGalleryItem}>
    <img
      onClick={onOpenModal}
      src={url}
      alt=""
      data-large-url={largeUrl}
      className={styled.ImageGalleryItemImage}
    />
  </li>
);

export default ImageGalleryItem;
