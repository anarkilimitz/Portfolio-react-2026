import { useState } from 'react';
import SwitcherSlider from '../../shared/ui/buttons/switcherSlider/switcherSlider';
import SliderCarousel from '../../widgets/sliderCarousel/SliderCarousel';

function SliderBlock({ image, description }) {
	const [mode, setMode] = useState('IMAGE');

	return (
		<div className="mb-5">
			<SwitcherSlider slide={mode} onSwitch={setMode} />

			<SliderCarousel mode={mode} imageSrc={image} description={description} />
		</div>
	);
}

export default SliderBlock;
