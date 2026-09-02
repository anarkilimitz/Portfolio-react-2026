import { RefObject, useState } from 'react';
import { Container } from 'react-bootstrap';

import SwitcherSlider from '../../shared/ui/buttons/switcherSlider/switcherSlider';
import NexusCmsCarousel from './nexusCmsCarousel/NexusCmsCarousel';

import styles from './nexusCmsSlider.module.scss';

type SlideType = 'IMAGE' | 'DETAILS';

interface NexusCmsSliderProps {
	lenisRef: RefObject<any | null>;
}

function NexusCmsSlider({ lenisRef }: NexusCmsSliderProps) {
	const [mode, setMode] = useState<SlideType>('IMAGE');

	return (
		<section className={styles.section}>
			<Container>
				<h2 className={styles.title}>Собственная CMS</h2>

				<div className={styles.switcher}>
					<SwitcherSlider slide={mode} onSwitch={setMode} />
				</div>

				<div className={styles.slider}>
					{mode === 'IMAGE' ? (
						<NexusCmsCarousel lenisRef={lenisRef} />
					) : (
						<div className={styles.details}>
							<div className={styles.detailsHeader}>
								<span className={styles.detailsNumber}>01</span>

								<div>
									<h3 className={styles.detailsTitle}>Nexus CMS</h3>

									<p className={styles.detailsDescription}>
										Собственная CMS для управления контентом и административной
										частью веб-проектов.
									</p>
								</div>
							</div>

							<div className={styles.detailsGrid}>
								<div className={styles.stackGroup}>
									<span className={styles.stackLabel}>Frontend</span>

									<div className={styles.stackList}>
										<span>React</span>
										<span>TypeScript</span>
										<span>Vite</span>
										<span>React Router</span>
										<span>Tailwind CSS</span>
										<span>DaisyUI</span>
										<span>Lucide React</span>
									</div>
								</div>

								<div className={styles.stackGroup}>
									<span className={styles.stackLabel}>Backend</span>

									<div className={styles.stackList}>
										<span>Node.js</span>
										<span>NestJS</span>
										<span>Prisma</span>
										<span>PostgreSQL</span>
										<span>REST API</span>
									</div>
								</div>

								<div className={styles.stackGroup}>
									<span className={styles.stackLabel}>Authentication</span>

									<div className={styles.stackList}>
										<span>JWT</span>
										<span>Access Tokens</span>
										<span>Protected API Routes</span>
										<span>NestJS Guards</span>
									</div>
								</div>

								<div className={styles.stackGroup}>
									<span className={styles.stackLabel}>Architecture</span>

									<div className={styles.stackList}>
										<span>Feature-Sliced Design</span>
										<span>Component-based UI</span>
										<span>TypeScript models</span>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</Container>
		</section>
	);
}

export default NexusCmsSlider;
