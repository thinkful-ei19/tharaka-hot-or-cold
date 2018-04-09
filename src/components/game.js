import React from 'react';
import Form from './forminput';
import Value from './value';
import Guess from './guesslist';

export default function Game() {
    return (
        <div className="game">
            <span>You Won. Click new game to play again</span>
            <Form />
            <Value />
            <Guess />
        </div>
    )
}