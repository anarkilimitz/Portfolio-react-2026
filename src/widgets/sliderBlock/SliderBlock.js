import styles from '../sliderBlock/sliderBlock.module.scss';

import SwitcherSlider from '../../shared/ui/buttons/switcherSlider/switcherSlider';
import SliderCarousel from '../../widgets/sliderCarousel/SliderCarousel';

import { useState } from 'react';

function SliderBlock({ image, description }) {
	const [mode, setMode] = useState('IMAGE');

	return (
		<div className={styles.wrapper}>
			<div className={styles.switcher}>
				<SwitcherSlider slide={mode} onSwitch={setMode} />
			</div>

			<div className={styles.content}>
				<SliderCarousel
					mode={mode}
					imageSrc={image}
					description={description}
				/>
			</div>
		</div>
	);
}

export default SliderBlock;
