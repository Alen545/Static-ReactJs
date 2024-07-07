import React from "react";
import main from "../assets/main.jpeg";
function TopSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <div className="text-center text-white max-w-[1375px]">
        <h1 className=" text-[35px] font-light  mb-4">
          Epic Games: An American Video Game And Software Developer <br /> And
          Publisher Based In Cary, North Carolina.
        </h1>
      </div>
      <div className="flex justify-center w-full">
        <img
          src={main}
          alt="Fortnite"
          className="w-full max-w-[1100px] h-auto my-8"
        />
      </div>
      <div className="text-center text-white max-w-[1000px]">
        <p className="font-Poppins text-[16px] font-light leading-[24px] tracking-[0.5px] mb-4">
          {/* Line height and line space */}
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert or live event, or discover over a million creator-made games,
          including racing, parkour, zombie survival, and more. Each Fortnite
          island has an individual age rating so you can find the one that's
          right for you and your friends. Find it all in Fortnite… Drop in.
        </p>
        <button className="bg-white text-black font-roboto text-[16px] py-2 px-6 rounded">
          Visit Website
        </button>
      </div>
    </div>
  );
}

export default TopSection;
