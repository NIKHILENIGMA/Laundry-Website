import React from "react";
import PropTypes from "prop-types"
const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  ...restProps
}) => {
  return <img 
  className={className} 
  src={src} 
  alt={alt} 
  loading={"lazy"} 
  />;
};

Img.prototypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
}

export { Img };
