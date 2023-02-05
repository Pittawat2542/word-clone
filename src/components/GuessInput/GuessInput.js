import { useState } from 'react';

function GuessInput({ addGuess, gameOverStatus }) {
	const [guess, setGuess] = useState('');

	return (
		<form
			className='guess-input-wrapper'
			onSubmit={(event) => {
				event.preventDefault();
				if (guess.length !== 5) {
					alert('Guess must be 5 letters long');
					return;
				}

				addGuess(guess);
				setGuess('');
			}}
		>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				id='guess-input'
				type='text'
				value={guess}
				onChange={(event) => {
					if (guess.length <= 5) {
						setGuess(event.target.value.toUpperCase());
					}
				}}
				minLength={5}
				maxLength={5}
				required
				disabled={gameOverStatus === 'win' || gameOverStatus === 'lose'}
			/>
		</form>
	);
}

export default GuessInput;
