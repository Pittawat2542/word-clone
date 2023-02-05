import React, { useState } from 'react';

import Banner from '../GameOverBanner/GameOverBanner';
import GuessInput from '../GuessInput/GuessInput';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [previousGuesses, setPreviousGuesses] = useState([]);
	const [gameOverStatus, setGameOverStatus] = useState(null);

	function addGuess(guess) {
		const nextPreviousGuesses = [
			...previousGuesses,
			{
				id: crypto.randomUUID(),
				text: guess,
			},
		];
		setPreviousGuesses(nextPreviousGuesses);

		if (nextPreviousGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameOverStatus('lose');
		}

		if (
			checkGuess(guess, answer).every(
				(characterStatus) => characterStatus.status === 'correct'
			)
		) {
			setGameOverStatus('win');
		}
	}

	return (
		<>
			<PreviousGuesses previousGuesses={previousGuesses} answer={answer} />
			<GuessInput addGuess={addGuess} gameOverStatus={gameOverStatus} />
			{(gameOverStatus === 'win' || gameOverStatus === 'lose') && (
				<Banner
					gameOverStatus={gameOverStatus}
					numOfGuesses={previousGuesses.length}
					answer={answer}
				/>
			)}
		</>
	);
}

export default Game;
