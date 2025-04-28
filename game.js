function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('player-choice').textContent = `You chose: ${playerChoice} `;
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice} `;

    const winnerText = document.getElementById('winner');

    if (playerChoice === computerChoice) {
        winnerText.textContent = "It's a Draw! ";
        winnerText.className = 'draw';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        winnerText.textContent = "You Win! ";
        winnerText.className = 'win';
    } else {
        winnerText.textContent = "You Lose! ";
        winnerText.className = 'lose';
    }
}
