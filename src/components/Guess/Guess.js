import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

const NUM_CHAR = 5;

function Guess({ value, answer }) {
	if (!Boolean(value)) {
		return (
			<p className='guess'>
				{range(NUM_CHAR).map((j) => (
					<span key={j} className='cell'></span>
				))}
			</p>
		);
	}

	const characterStatuses = checkGuess(value, answer);

	return (
		<p className='guess'>
			{characterStatuses.map(({letter, status}, index) => (
				<span className={`cell ${status}`} key={index}>
					{letter}
				</span>
			))}
		</p>
	);
}

export default Guess;
