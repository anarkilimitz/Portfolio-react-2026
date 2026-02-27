import { Container, Row, Col } from 'react-bootstrap';
import SliderBlock from '../sliderBlock/SliderBlock';
import { sliderData } from '../sliderBlock/sliderData/sliderData';

function ProjectSlider() {
	return (
		<Container className="py-5">
			{sliderData.map((item, index) => {
				const isEven = index % 2 === 0;

				return (
					<Row
						key={item.id}
						className="g-4 g-lg-5 mb-5 mb-lg-6"
					>
						{/* Текстовая колонка */}
						<Col xs={12} lg={6} className={isEven ? '' : 'order-lg-2'}>
							<div className={isEven ? 'pe-lg-4 pe-xl-5' : 'ps-lg-4 ps-xl-5'}>
								<h2 className="mb-3 mb-lg-4 fw-bold">{item.title}</h2>
								<p className="lead text-muted mb-0">{item.text}</p>

								{/* Если хочешь — можно добавить сюда кнопки, теги, год и т.д. */}
								<div className="mt-4">
                  <span className="badge bg-primary me-2">React</span>
                  <span className="badge bg-secondary">2024</span>
                </div>
							</div>
						</Col>

						{/* Блок с переключателем и картинкой/каруселью */}
						<Col
							xs={12}
							lg={6}
							className={isEven ? 'order-lg-2' : 'order-lg-1'}
						>
							<SliderBlock
								image={item.image}
								description={item.description} // если всё ещё нужен внутри
							/>
						</Col>
					</Row>
				);
			})}
		</Container>
	);
}

export default ProjectSlider;
