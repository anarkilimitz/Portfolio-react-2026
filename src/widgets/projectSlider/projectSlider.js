import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

import SliderBlock from '../sliderBlock/SliderBlock';
import { sliderData } from '../sliderBlock/sliderData/sliderData';

import styles from './projectSlider.module.scss'; 

function ProjectSlider() {
	return (
		<Container className="py-5">
			{sliderData.map((item, index) => {
				const isEven = index % 2 === 0;

				return (
					<Row key={item.id} className="g-4 g-lg-5 mb-5 mb-lg-6">
						{/* текстовая колонка */}
						<Col
							xs={12}
							lg={6}
							className={`
                                ${isEven ? '' : 'order-lg-2'}
                                align-self-lg-start 
                                sticky-lg-top 
                                ${styles.stickyTextCol}
                            `.trim()}
						>
							<div className={isEven ? 'pe-lg-4 pe-xl-5' : 'ps-lg-4 ps-xl-5'}>
								<h2 className="mb-3 mb-lg-4 fw-bold">{item.title}</h2>
								<p className="lead text-muted mb-0">{item.text}</p>

								{/* бейджики */}
								<div className="mt-4">
									{item.tags &&
										item.tags.map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className={`badge bg-${tag.bg} me-2`}
											>
												{tag.text}
											</span>
										))}
								</div>

								{/* ссылка со стрелкой */}
								<div className="mt-4 mt-lg-5">
									{item.link && (
										<div>
											<a
												href={item.link}
												target="_blank"
												rel="noopener noreferrer"
												className="icon-link icon-link-hover text-decoration-none fw-semibold"
											>
												View Project
												{/* стрелка*/}
												<span className="bi mb-2 ms-2" aria-hidden="true">
													&rarr;
												</span>
											</a>
										</div>
									)}
								</div>

								{/* ссылка со ГИТХАБ */}
								<div className="mt-3 mt-lg-3">
									{item.linkGit && (
										<div>
											<a
												href={item.linkGit}
												target="_blank"
												rel="noopener noreferrer"
												className="icon-link icon-link-hover text-decoration-none fw-semibold"
											>
												GitHub
												{/* стрелка*/}
												<span className="bi mb-2" aria-hidden="true">
													&rarr;
												</span>
												<FaGithub style={{ marginLeft: '15px' }} />
											</a>
										</div>
									)}
								</div>
							</div>
						</Col>

						{/* Блок с переключателем и картинкой/каруселью */}
						<Col
							xs={12}
							lg={6}
							className={isEven ? 'order-lg-2' : 'order-lg-1'}
						>
							<SliderBlock image={item.image} description={item.description} />
						</Col>
					</Row>
				);
			})}
		</Container>
	);
}

export default ProjectSlider;
