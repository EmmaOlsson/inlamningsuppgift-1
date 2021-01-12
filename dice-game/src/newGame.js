import React from 'react'


function NewGame(props) {

    const startOver = () => {
        window.location.reload();
    }

    return (
        <button className='newGameButton' onClick={startOver} > New game</ button>
    )
}

export default NewGame;