let dog = {
  name: "Apollo",
  numLegs: 4,
  color: "black",
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";},

};
  function Dog() {
    this.name = "spot";
    this.color = "beige";
    this.numLegs = 2;
  }
dog.sayLegs();
