import React from "react";
import { useParams } from "react-router-dom";

const InstructorContract = () => {
  const { id } = useParams();

  return (
    <div className="contract">
      <h2>Contract</h2>
      <p>
        <b>
          The company will take 20% of the profit made from the videos that you
          upload to the site{" "}
        </b>
      </p>
      <button onClick={() => (window.location.href = `/HomeInstructor/${id}`)}>
        {" "}
        accept the terms
      </button>
    </div>
  );
};

export default InstructorContract;
