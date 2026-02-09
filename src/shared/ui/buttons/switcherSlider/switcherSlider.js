import styles from './switcherSlider.module.scss';

function SwitcherSlider({ slide, onSwitch }) {
	return (
		<div className={styles.switcherSlider}>
			<button
				className={`${styles.button} ${slide === 'IMAGE' ? styles.active : ''}`}
				onClick={() => onSwitch('IMAGE')}
			>
				IMAGE
			</button>

			<button
				className={`${styles.button} ${
					slide === 'DETAILS' ? styles.active : ''
				}`}
				onClick={() => onSwitch('DETAILS')}
			>
				DETAILS
			</button>
		</div>
	);
}

export default SwitcherSlider;
