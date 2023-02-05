import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import React from 'react';
import { range } from '../../utils';

function PreviousGuesses({ previousGuesses, answer }) {
	const remainingGuesses = NUM_OF_GUESSES_ALLOWED - previousGuesses.length;

	return (
		<div className='guess-results'>
			{previousGuesses.map((guess) => (
				<Guess key={guess.id} value={guess.text} answer={answer} />
			))}
			{range(remainingGuesses).map((index) => (
				<Guess key={index} />
			))}
		</div>
	);
}

export default PreviousGuesses;
