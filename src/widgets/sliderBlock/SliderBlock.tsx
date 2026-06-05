import React, { useState } from 'react';
import styles from '../sliderBlock/sliderBlock.module.scss';

import SwitcherSlider from '../../shared/ui/buttons/switcherSlider/switcherSlider';
import SliderCarousel from '../sliderCarousel/SliderCarousel';

interface SliderBlockProps {
	image: string;
	description: string;
}

function SliderBlock({ image, description }: SliderBlockProps) {
	const [mode, setMode] = useState<'IMAGE' | 'DETAILS'>('IMAGE');

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
