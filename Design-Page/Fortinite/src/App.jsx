import React from "react";
import GameFeatures from "./components/GameFeatures";
import TopSection from "./components/TopSection";
import OurContribution from "./components/OurContribution";
import InterestedSection from "./components/InterestedSection";

function App() {
  return (
    <div className="bg-black w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 space-y-8">
      <TopSection />
      <GameFeatures />
      <div className="space-y-8">
        <OurContribution />
        <div className="mt-16">
          <InterestedSection />
        </div>
      </div>
    </div>
  );
}

export default App;
