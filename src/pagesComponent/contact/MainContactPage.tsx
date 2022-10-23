import React from "react";
import ContactDetails from "./ContactDetails";
import Intro from "./Intro";
import WorkingHours from "./WorkingHours";

function MainContactPage() {
  return (
    <div className="my-20">
      <Intro />
      <div className="flex justify-between items-start mt-24">
        <ContactDetails />
        <WorkingHours />
      </div>
    </div>
  );
}

export default MainContactPage;
