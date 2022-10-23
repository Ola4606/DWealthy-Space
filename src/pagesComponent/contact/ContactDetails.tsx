import React from "react";

function ContactDetails() {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="flex justify-center items-center w-full">
        <p className="my-6 text-black text-5xl font-title font-bold">
          Our {<span className="text-blue-600">Contact Details</span>}.
        </p>
      </div>

      <span className="text-black text-lg font-casual font-bold text-center mt-8">
        Location:{" "}
        <span className="font-medium">
          Business complex, Anisere Bus-stop, Ikotun.
        </span>
      </span>

      <span className="text-black text-lg font-casual font-bold text-center mt-4">
        Email: <span className="font-medium">something@gmail.com</span>
      </span>

      <span className="text-black text-lg font-casual font-bold text-center mt-4">
        WhatsApp: <span className="font-medium">+000 0000 000.</span>
      </span>

      <span className="text-black text-lg font-casual font-bold text-center mt-4">
        Phone: <span className="font-medium">+000 0000 000.</span>
      </span>
    </div>
  );
}

export default ContactDetails;
