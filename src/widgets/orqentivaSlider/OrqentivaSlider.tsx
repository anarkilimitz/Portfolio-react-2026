import { RefObject, useState } from 'react';
import { Container } from 'react-bootstrap';
import type Lenis from 'lenis';

import SwitcherSlider from '../../shared/ui/buttons/switcherSlider/switcherSlider';
import OrqentivaCarousel from './orqentivaCarousel/OrqentivaCarousel';
import { useLanguage } from '../../shared/i18n/languageContext';

import styles from './orqentivaSlider.module.scss';

type SlideType = 'IMAGE' | 'DETAILS';

interface OrqentivaSliderProps {
	lenisRef: RefObject<Lenis | null>;
}

function OrqentivaSlider({ lenisRef }: OrqentivaSliderProps) {
	const [mode, setMode] = useState<SlideType>('IMAGE');
	const { t } = useLanguage();

	return (
		<section className={styles.section}>
			<Container>
				<h2 className={`${styles.title} ${styles.titleCms}`}>Orqentiva ERP</h2>

				<div className={styles.switcher}>
					<SwitcherSlider slide={mode} onSwitch={setMode} />
				</div>

				<div className={styles.slider}>
					{mode === 'IMAGE' ? (
						<OrqentivaCarousel lenisRef={lenisRef} />
					) : (
						<div className={styles.details}>
							<div className={styles.detailsHeader}>
								<span className={styles.detailsNumber}>02</span>

								<div>
									<h3 className={styles.detailsTitle}>WB CMS Orqentiva</h3>

									<p className={styles.detailsDescription}>
										{t.orqentivaSubtitle}
									</p>
								</div>
							</div>

							<div className={styles.detailsGrid}>
								<div className={styles.stackGroup}>
									<span className={styles.stackLabel}>Frontend</span>

									<div className={styles.stackList}>
										<span>React 19</span>
										<span>TypeScript</span>
										<span>Vite</span>
										<span>React Router</span>
										<span>SCSS / Sass</span>
										<span>CSS Modules</span>
										<span>Recharts</span>
										<span>Lucide React</span>
									</div>
								</div>

								<div className={styles.stackGroup}>
									<span className={styles.stackLabel}>Backend</span>

									<div className={styles.stackList}>
										<span>Node.js 22</span>
										<span>NestJS 11</span>
										<span>Prisma ORM 7</span>
										<span>PostgreSQL 17</span>
										<span>REST API</span>
										<span>Wildberries API</span>
									</div>
								</div>

								<div className={styles.stackGroup}>
									<span className={styles.stackLabel}>
										Authentication & Security
									</span>

									<div className={styles.stackList}>
										<span>JWT Authentication</span>
										<span>Access & Refresh Tokens</span>
										<span>HttpOnly Cookies</span>
										<span>Refresh Token Rotation</span>
										<span>bcrypt Password Hashing</span>
										<span>bcrypt Token Hashing</span>
										<span>NestJS Guards</span>
										<span>AES-256-GCM Encryption</span>
									</div>
								</div>

								<div className={styles.stackGroup}>
									<span className={styles.stackLabel}>Architecture & Data</span>

									<div className={styles.stackList}>
										<span>Modular Architecture</span>
										<span>TypeScript</span>
										<span>Prisma Data Models</span>
										<span>PostgreSQL Sessions</span>
										<span>External API Integration</span>
										<span>Background Tasks</span>
										<span>Environment Configuration</span>
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

export default OrqentivaSlider;
