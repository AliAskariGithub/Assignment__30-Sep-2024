import React from 'react';
import StudentCard from './components/StudentCard';

export default function HomePage() {
  const students = [
    { 
      name: 'Ali Askari', 
      age: 15, 
      rollNumber: '487791', 
      distanceLearning: "No", 
      city: "Karachi", 
      center: "Governer House Karachi", 
      campus: "Main", 
      studentClass: 'Monday-02:00 PM-05:00 PM',
      imageUrl: '/images/Mypicture01.jpg' // Add the image URL
    },
    { 
      name: 'Rizwan Abbas', 
      age: 13, 
      rollNumber: '5678', 
      distanceLearning: "No", 
      city: "Karachi", 
      center: "Governer House Karachi", 
      campus: "Main", 
      studentClass: 'Saturday-09:00 AM-12:00 PM',
      imageUrl: '/images/Mypicture02.jpg' // Another image
    },
    { 
      name: 'Ali Baqir', 
      age: 18, 
      rollNumber: '21104', 
      distanceLearning: "No", 
      city: "Karachi", 
      center: "Governer House Karachi", 
      campus: "Main", 
      studentClass: 'Tuesday-07:00 PM-10:00 PM',
      imageUrl: '/images/Mypicture03.jpg' // Another image
    },
  ];

  return (
    <>
      <h1 className="font-poppins flex justify-center items-center mt-10 -mb-10 text-4xl font-bold custom-color">Student ID Card</h1>
      <div className="p-6 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 mt-20">
          {students.map((student, index) => (
            <StudentCard
              key={index}
              name={student.name}
              age={student.age}
              rollNumber={student.rollNumber}
              distanceLearning={student.distanceLearning}
              city={student.city}
              center={student.center}
              campus={student.campus}
              studentClass={student.studentClass}
              imageUrl={student.imageUrl} // Pass the image URL
            />
          ))}
        </div>
      </div>
    </>
  );
}
