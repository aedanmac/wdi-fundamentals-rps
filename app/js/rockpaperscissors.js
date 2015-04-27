function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove() {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    // if (move == 'rock'){
    // 	return 'rock'
    // } else if (move == 'paper'){
    // 	return 'paper'
    // } else if (move == 'scissors'){
    // 	return 'scissors'
    // } else {
    // 	return getInput();
    // }

   // if ((move == 'rock') || (move == 'scissors') || (move == 'paper')) {
   // 	return move
  //  } else {
    	return getInput();
    
}


function getComputerMove() {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
 //   if ((move == 'rock') || (move == 'scissors') || (move == 'paper')) {
 //   	return move
 //   } else {
    	return randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (computerMove == playerMove){
    	return 'tie'
    }else if (computerMove == 'rock' && playerMove == 'paper'){
    	return 'player'
    }else if (computerMove == 'rock' && playerMove == 'scissors'){
    	return 'computer'
    }else if (computerMove == 'paper' && playerMove == 'rock'){
    	return 'computer'
    }else if (computerMove == 'paper' && playerMove == 'scissors'){
    	return 'player'
    }else if (computerMove == 'scissors' && playerMove == 'rock'){
    	return 'player'
    }else if (computerMove == 'scissors' && playerMove == 'paper'){
    	return 'computer'
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5){
      var playerMove = getPlayerMove();
      console.log(playerMove)
      var computerMove = getComputerMove();
      console.log(computerMove);
      var winner = getWinner(playerMove,computerMove);
      console.log(winner);
      if (winner == 'computer'){
          computerWins ++
      }else if (winner == 'player'){
          playerWins ++
      }
      console.log("Player Wins: " + playerWins + " Computer Wins: " + computerWins)
      console.log("");
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    
}
playToFive();