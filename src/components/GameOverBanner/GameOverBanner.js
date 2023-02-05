import React from 'react';

function GameOverBanner({ gameOverStatus, numOfGuesses, answer }) {
	return gameOverStatus === 'win' ? (
		<div className='happy banner'>
			<p>
				<strong>Congratulations!</strong> Got it in{' '}
				<strong>{numOfGuesses} guess{numOfGuesses > 1 ? 'es' : ''}</strong>.
			</p>
		</div>
	) : (
		<div className='sad banner'>
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
		</div>
	);
}

export default GameOverBanner;
