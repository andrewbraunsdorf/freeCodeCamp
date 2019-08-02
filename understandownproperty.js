function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];


// The following code adds all of the own properties of canary to the array ownProps:
for (let property in canary) {
  ownProps.push(property)
}
