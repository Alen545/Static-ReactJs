import React from "react";

function OurContribution() {
  const stats = [
    {
      value: "5M",
      description: "Daily User Engagements",
    },
    {
      value: "$500K",
      description: "Revenue Surge for a Platform",
    },
    {
      value: "10X",
      description: "ROAS on all our marketing campaigns",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 ">
      <div className="text-center mt-auto mb-40 mt-10">
        <h2 className="text-3xl font-light mb-4">Our Contribution</h2>
        <p className="max-w-6xl mx-auto text-lg leading-relaxed">
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user community. Collaborating
          with us represents an investment, rather than a mere expenditure. Our
          dedication to providing distinctive digital interactions guarantees
          unparalleled benefits for our clientele.
        </p>
        <div className="flex flex-wrap justify-center gap-12 p-12 ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-60 "
            >
              <span className="text-[45px] font-light mb-4">{stat.value}</span>
              <p className="text-lg">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurContribution;
