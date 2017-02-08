/*EXERCISE 1*/

function addNumbers(numberA, numberB) {
  return numberA + numberB;
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo) // 4

/*EXERCISE 2*/

var yell = function(string) {
  return string.toUpperCase();
};
console.log(yell("christopher colvin"));

var yell10 = function(string) {
    for (var i = 0; i < 10; i++) {
      console.log(yell(string));
    }
}
yell10("tanner");
console.log(yell10);
yell10("yes");
console.log(yell10);

/*EXERCISE 3*/
function largest(stringA, stringB) {
  var results;
  if (stringA.length > stringB.length) {
    results = stringA;
  } else {
    results = stringB;
  }
  return results
}

console.log(largest("christopher Colvin","tanner"))

/*EXERCISE 4*/
function isVowel(character){
  character = character.toLowerCase();
  if(character === 'a') {
    return true;
  } else if (character === 'e') {
    return true;
  } else if (character === 'i') {
    return true;
  } else if (character === 'o') {
    return true;
  } else if (character === 'u') {
    return true;
  } else if (character === 'y') {
    return true;
  } else {
    return false;
  }
};
console.assert(isVowel('b') === false);
console.log(isVowel('b'));
console.log(isVowel('a'));
