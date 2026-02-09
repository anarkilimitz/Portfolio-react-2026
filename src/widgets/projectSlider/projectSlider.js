import { sliderData } from '../sliderBlock/sliderData/sliderData';
import SliderBlock from '../sliderBlock/SliderBlock';
import { Container } from 'react-bootstrap';

function ProjectSlider() {
	return (
		<Container>
			{sliderData.map(({ id, image, description }) => (
				<SliderBlock key={id} image={image} description={description} />
			))}
		</Container>
	);
}

export default ProjectSlider;
