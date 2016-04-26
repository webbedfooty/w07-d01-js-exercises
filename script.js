function sayHi() {
  alert("Hello, stranger!");
}

function shouty() {
  var name = prompt("What is yourname!?!");
  alert("HELLO " + name.toUpperCase() + "!");
}

function evenOdd() {
  var x = prompt("Give me a number:");
  if (x % 2 == 1) {
    alert("Your number is odd");
  } else if (x % 2 == 0) {
    alert("Your number is even");
  } else {
    alert("That's not a number.");
  }
}

function numberPrompter() {
  var x = prompt("Give me an even number between 3 and 11:");
  if ((x === '4') || (x === '6') || (x === '8') || (x === '10')) {
    alert("Congratulations! You followed the instructions");
  } else {
      alert("I need a valid input");
      numberPrompter();
  }
}

function bottles() {
  var x = prompt("Give me a number greater than zero");
  if (x < 0) {
    alert("looking for a positive number");
    bottles();
  }  else if(isNaN(x)) {
    alert("those are letters - we're looking for a positive number");
    bottles();
  }
    while (x > 0) {
      console.log(x + " bottles of beer on the wall!" + x + " bottles of beer!");
      x--;
      if (x === 0) {
        console.log("Take one down and pass it around. No more bottles of beer on the wall!");
      }  else {
        console.log("Take one down and pass it around. " + x + " bottles of beer on the wall!");
    }
  }
}

function fizzBuzz() {
  var x = prompt("Give me a number greater than zero");
  if (x < 0) {
    alert("looking for a positive number");
    fizzBuzz();
  }  else if(isNaN(x)) {
    alert("those are letters - we're looking for a positive number");
    fizzBuzz();
  }
  var i = 1
  while (i <= x) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    }  else if(i % 5 === 0) {
        console.log("Buzz");
    }  else if(i % 3 === 0) {
        console.log("Fizz");
    }  else {
        console.log(i);
    }
    i++;
  }
}

function wordReverser() {
  var o = '';
  var s = prompt("Give me a word - I'm gonna blow your mind");
  for (var i = s.length - 1; i >= 0; i--) {
    o += s[i];
}  console.log(o);

}
