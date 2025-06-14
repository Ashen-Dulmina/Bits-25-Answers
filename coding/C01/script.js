function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = `It's a tie!`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win!`;
    } else {
        result = `You lose!`;
    }

    document.getElementById('result').innerText = result;
    document.getElementById('player-choice').innerText = `You chose: ${playerChoice}`;
    document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice}`;
}