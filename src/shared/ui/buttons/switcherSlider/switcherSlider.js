import styles from './switcherSlider.module.scss';

import { Button, ButtonGroup } from 'react-bootstrap';
// import {useSlider} from

function SwitcherSlider() {
	// const { slide, switchSlide } = useSlider();

	return (
		<div className={styles.sliderSwitcher}>
			<ButtonGroup>
				<Button
					variant="none"
					// className={`${styles.sliderSwitcherBtn} ${
					// 	slide === 'IMAGE' ? styles.active : ''
					// }`}
					// onClick={() => switchSlide('IMAGE')}
				>
					IMAGE
				</Button>
				<Button
					variant="none"
					// className={`${styles.sliderSwitcherBtn} ${
					// 	slide === 'DETAILS' ? styles.active : ''
					// }`}
					// onClick={() => switchSlide('DETAILS')}
				>
					DETAILS
				</Button>
			</ButtonGroup>
		</div>
	);
}

export default SwitcherSlider;
