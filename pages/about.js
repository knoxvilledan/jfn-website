import React from "react";

const aboutMe = {
  name: "Frantasia Hogan",
  profession: "Masseuse",
  location: "Atlanta",
  origin: "Chicago",
  network: [],
  addToNetwork: function (person) {
    this.network.push(person);
  },
};

// Add your own details
// aboutMe.name = "Your Name";
// aboutMe.origin = "Chicago";

// Add people to your network
// aboutMe.addToNetwork("Person 1");
// aboutMe.addToNetwork("Person 2");
// aboutMe.addToNetwork("Person 3");

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Name: {aboutMe.name}</p>
      <p>Profession: {aboutMe.profession}</p>
      <p>Location: {aboutMe.location}</p>
      <p>Origin: {aboutMe.origin}</p>
      <h2>Network</h2>
      <ul>
        {aboutMe.network.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
