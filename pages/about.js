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
aboutMe.name = "Your Name";
aboutMe.origin = "Chicago";

// Add people to your network
aboutMe.addToNetwork("Person 1");
aboutMe.addToNetwork("Person 2");
aboutMe.addToNetwork("Person 3");

console.log(aboutMe);
