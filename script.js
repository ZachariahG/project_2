/*
Step One: Greet user and get name. Store name in variable userName.
   prompt
Step 2: Request # of games (3 or 6) holes of mini golf.
   prompt - store in variable numOfHoles
   else "Please enter a valid #"
Step 3: Loop numOfHoles times
   -ask userName for score x numOfHoles
Step 4: Compare total to par. Output 1 of 3 messages.
*/

console.log("Hello, player!");

let userName = prompt("Welcome to GC mini golf! What is your name?");

if (userName) {
   alert(`Hello, ${userName}!`);
} else {
   alert('Please enter your name:');
}

let numOfHoles = parseInt(prompt('Would you like to play 3 or 6 holes today?'));
let total = 0;
let par = 3 * numOfHoles;

if (numOfHoles === 3 || numOfHoles === 6) {
  for (let i = 0; i < numOfHoles; i++) {
    let hole = i + 1;
    let putts = parseInt(prompt(`How many putts for hole ${hole}? (par is 3)`));
    total += putts;
  }

  let message;
  if (total > par) {
    message = `Nice try, ${userName}... Your total par is +${total - par}.`;
  } else if (total < par) {
    message = `Great job, ${userName}! Your total par is -${par - total} strokes.`;
  } else {
    message = `Good game, ${userName}. You are exactly at par.`;
  }
  console.log(message);
  alert(`Your total number of putts for ${numOfHoles} holes is: ${total}. ${message}`);
} else {
  alert('Invalid input. Please enter either 3 or 6.');
}
