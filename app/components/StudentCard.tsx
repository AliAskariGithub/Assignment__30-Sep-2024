import React from "react";

interface StudentProps {
  name: string;
  age: number;
  distanceLearning: string;
  city: string;
  center: string;
  campus: string;
  rollNumber: string;
  studentClass: string;
  imageUrl: string; // Add imageUrl prop
}

const StudentCard: React.FC<StudentProps> = ({
  name,
  age,
  rollNumber,
  studentClass,
  distanceLearning,
  city,
  center,
  campus,
  imageUrl, // Accept imageUrl prop
}) => {
  return (
    <>
      <div className="bg-white shadow-custom sm:w-90 mb-6 p-6 border-2 border-black border-t-[rgb(46,182,232)] border-b-[rgb(46,182,232)] mr-8 -ml-2 w-[105%] font-poppins">
        {/* Display the student image */}
        <img className="w-32 h-32 mx-auto" src={imageUrl} alt={`${name}'s photo`}/>

        <div className="border-t border-gray-200 mt-4">

          <h2 className="font-semibold">
            <span className="text-custom-blue font-bold">Name: </span>
            {name}
          </h2>

          <p className="font-semibold">
            <span className="text-custom-blue font-bold">Roll No: </span>
            {rollNumber}
          </p>
          <p className="font-semibold">
            <span className=" text-custom-blue font-bold">Age: </span>
            {age}
          </p>
          <p className="font-semibold">
            <span className=" text-custom-blue font-bold">Distance Learning: </span>
            {distanceLearning}
          </p>
          <p className="font-semibold">
            <span className=" text-custom-blue font-bold">City: </span>
            {city}
          </p>
          <p className="font-semibold">
            <span className=" text-custom-blue font-bold">Center: </span>
            {center}
          </p>
          <p className="font-semibold">
            <span className=" text-custom-blue font-bold">Campus: </span>
            {campus}
          </p>
          <p className="font-semibold">
            <span className=" text-custom-blue font-bold">Days/Time: </span>
            {studentClass}
          </p>
        </div>
      </div>
    </>
  );
};

export default StudentCard;
