import React from "react";
import firstpic from "../assets/firstpic.jpeg";
import secondpic from "../assets/secondpic.png";
import thirdpic from "../assets/thridpic.jpeg";

function GameFeatures() {
  const features = [
    {
      image: firstpic,
      description:
        "Explore Large, Destructible Environments Where No Two Games Are Ever The Same.",
    },
    {
      image: secondpic,
      description:
        "Team Up With Friends By Sprinting, Climbing And Smashing Your Way To Earn Your Victory Royale.",
    },
    {
      image: thirdpic,
      description:
        "Discover Even More Ways To Play Across Thousands Of Creator-Made Game Genres.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-14">
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center text-white"
          >
            <div className="w-80 h-80 mb-4">
              <img
                src={feature.image}
                alt={`Feature ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-roboto text-[16px] leading-[24px] tracking-[0.5px] max-w-xs">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameFeatures;
