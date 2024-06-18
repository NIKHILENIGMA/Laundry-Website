import React from "react";
import { Img } from "../Img";
import { Link } from "react-router-dom";
function SquareShapeCard({ image, title, description, link }) {
  return (
    <Link to={link} className="relative p-3 overflow-hidden rounded-lg shadow-lg hover:bg-white ">
      <Img
        src={image}
        alt={title}
        className="object-cover w-full rounded-lg [object-position:0%_20%] h-72"
      />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </Link>
  );
}

export { SquareShapeCard };
