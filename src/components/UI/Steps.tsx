import React, { useState, useEffect, ReactNode } from 'react';

import './Steps.scss';

const Steps = ({ steps }: StepsProps) => {
	const [index, setIndex] = useState(0);
	const [stepHeight, setStepHeight] = useState(0);

	useEffect(() => {
		const height = document.getElementById(`step-${index}`)?.clientHeight;

		if (height) {
			setStepHeight(height);
		}
	}, [index]);

	return (
		<div className="steps" style={{ height: stepHeight }}>
			{steps.map((step, i) => (
				<div className="step" style={{ left: `${i * 100 - index * 100}%` }} key={i} id={`step-${i}`}>
					{step}
				</div>
			))}
		</div>
	);
};

interface StepsProps {
	/**
	 * Array of steps to display
	 */
	steps: Array<ReactNode>;
}

export default Steps;
