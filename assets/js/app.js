const PlayGame = () => {
    //variables
    let playerScore = 0;
    let compScore = 0;
    
    //selector
    const weaponRock = document.querySelector('.rock');
    const weaponPaper = document.querySelector('.paper');
    const weaponScissors = document.querySelector('.scissors');
    const playerWeapon = document.getElementById('weapon__player');
    const computerWeapon = document.getElementById('weapon__computer');
    const winnerShow = document.getElementById('winner');
    const battleResult = document.getElementById('conclusion_text');
    const playerScoreBoard = document.getElementById('player__score');
    const computerScoreBoard = document.getElementById('computer__score');
    const conclude = document.getElementById('conclusion__text');
    const replayBtn = document.getElementById('replay');
    const showResult = document.querySelector('.conclusion');
    
    const playerOpt = [weaponRock, weaponPaper, weaponScissors]
    const compOpt =['Rock', 'Paper', 'Scissors']
    
    //functions
    const Play = () => {
        playerOpt.forEach(option => {
            option.addEventListener('click', function() {
                const randomCoiceComp = Math.floor(Math.random()*3);
                const compChoice = compOpt[randomCoiceComp];
    
                computerWeapon.innerText = compChoice;
                playerWeapon.innerText = option.textContent;
    
                InGame(this.innerText, computerWeapon.innerText);
    
                if(playerScore === 3 || compScore === 3) {
                    GameOver();
                }
            })
        })
    }
    
    const InGame = (playerWeapon, computerWeapon) => {
        const player = playerWeapon.toString().toLowerCase();
        const computer = computerWeapon.toString().toLowerCase();
        const result = winnerShow;

        if(player === computer){
            result.textContent = 'Draw'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                compScore++;
                computerScoreBoard.textContent = compScore;
 
            }else{
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                compScore++;
                computerScoreBoard.textContent = compScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
                compScore++;
                computerScoreBoard.textContent = compScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    const GameOver = () => {
        showResult.classList.add('active');

        if(playerScore > compScore) {
            conclude.textContent = "YOU WIN!!!";
        } else if (playerScore < compScore) {
            conclude.textContent = "YOU LOSE!!!";
        } else {
            conclude.textContent = "DRAW!!!";
        }

        replayBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }
    
    //call functions
    Play();
}

//call main functions
PlayGame();