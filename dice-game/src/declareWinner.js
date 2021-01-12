import React from 'react';
import DiceOne from './img/diceOne.png';
import DiceTwo from './img/diceTwo.png';
import DiceThree from './img/diceThree.png';
import DiceFour from './img/diceFour.png';
import DiceFive from './img/diceFive.png';
import DiceSix from './img/diceSix.png';

function highestScore(totalUser, totalComputer, lastRoll) {
    let winner = '';

    if (lastRoll > 0) {
        if (totalUser > totalComputer) {
            winner = 'You won!'
        } else if (totalComputer > totalUser) {
            winner = 'The computer won!'
        } else {
            winner = 'Equal!'
        }
    }
    return winner;
}


function DeclareWinner(props) {

    const totalScoreUser = props.userDieOne + props.userDieTwo + props.userDieThree;

    const totalScoreComputer = (props.computerDieOne + props.computerDieTwo + props.computerDieThree);

    const won = highestScore(props.userDieOne + props.userDieTwo + props.userDieThree, props.computerDieOne + props.computerDieTwo + props.computerDieThree, props.computerDieThree)

    return (
        <section className="scoreContainer">
            <section className="userScore">
                <h2>You</h2>
                <div className="scoreUserComputer">
                    <div className="diceIcon">
                        <p>{props.userDieOne}</p>
                    </div>
                    <i className="fas fa-plus"></i>
                    <div className="diceIcon">
                        <p>{props.userDieTwo}</p>
                    </div>
                    <i className="fas fa-plus"></i>
                    <div className="diceIcon">
                        <p>{props.userDieThree}</p>
                    </div>
                    <i className="fas fa-equals"></i>
                    <div className="diceIcon">
                    <p>{totalScoreUser}</p>
                    </div>
                </div>
            </section>

            <section className="computerScore">
                <h2>Computer</h2>
                <div className="scoreUserComputer">
                    <div className="diceIcon">
                        <p>{props.computerDieOne}</p>
                    </div>
                    <i className="fas fa-plus"></i>
                    <div className="diceIcon">
                        <p>{props.computerDieTwo}</p>
                    </div>
                    <i className="fas fa-plus"></i>
                    <div className="diceIcon">
                        <p>{props.computerDieThree}</p>
                    </div>
                    <i className="fas fa-equals"></i>
                    <div className="diceIcon">
                    <p>{totalScoreComputer}</p>
                    </div>
                </div>
            </section>
            <div className="winner">
                <h2>{won}</h2>
            </div>
        </section>


    )
}



export default DeclareWinner;



