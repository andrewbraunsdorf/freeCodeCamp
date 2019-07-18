let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-99]/ig;
let result = quoteSample.match(myRegex);
