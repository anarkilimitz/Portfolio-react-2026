import React from 'react';
import './arcButton.scss';

const ArcButton = ({ text = 'КНОПКА', onClick, className = '' }) => {
	return (
		<button className={`arc-button-container ${className}`} onClick={onClick}>
			<div className="arc-wrapper">
				<div className="arc-bloom"></div>

				<div className="arc-card">
					<div className="arc-border"></div>
					<div className="shine-overlay"></div>

					<div className="content">
						<span className="glitch" data-text={text}>
							{text}
						</span>
					</div>
				</div>
			</div>
		</button>
	);
};

export default ArcButton;
