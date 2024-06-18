import React from "react";
import { SquareShapeCard } from "../../components";
import ServiceDetails from "../ServiceDetails";

function Services() {
  const cardsData = [
    {
      image:"../../Untitled design (1).png",
      title: "Washing",
      description: "This is a description for card 1.",
      link: "wash-and-iron"
    },
    {
      image:"../../Untitled design (2).png",
      title: "Iron",
      description: "This is a description for card 2.",
      link: "/services/iron"
    },
    {
      image:"../../Untitled design (3).png",
      title: "Fold",
      description: "This is a description for card 3.",
      link: "/services/fold"
    },
    {
      image:"../../Untitled design (4).png",
      title: "Dry Cleaning",
      description: "This is a description for card 4.",
      link: "/services/dry-cleaning"
    },
    {
      image:"Category 3D.png",
      title: "Card Title 4",
      description: "This is a description for card 4.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585314293845-4db3b9d0c6e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhdW5kcnl8ZW58MHx8MHx8fDA%3D",
      title: "Card Title 4",
      description: "This is a description for card 4.",
    },
  ];
  return (
    <div className="relative w-full max-h-full  mx-auto bg-[#F3F3F3]">
      <div className="h-[40%]">
        <div className="sm:w-[50%] sm:text-3xl mx-auto p-5 text-center font-semibold text-wrap text-3xl ">
          <h2>Comprehensive Laundry Services</h2>
          <h2>Tailored to Your Needs</h2>
        </div>
        <div className="sm:w-[50%] mx-auto p-1 sm:p-3 text-center font-normal text-wrap sm:text-lg">
          <p>
            Welcome to Magic Touch Online Laundry Service where tranquility
            meets effeciency
          </p>
        </div>
      </div>
      <div className="relative h-[60%]">
        <div className="container p-3 mx-auto">
          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cardsData.map((card, index) => (
              <SquareShapeCard
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
