import styles from './switcherSlider.module.scss';

import { useLanguage } from '../../../i18n/languageContext';

function SwitcherSlider({ slide, onSwitch }) {
	const { t } = useLanguage();

	return (
		<div className={styles.switcherSlider}>
			<button
				className={`${styles.button} ${slide === 'IMAGE' ? styles.active : ''}`}
				onClick={() => onSwitch('IMAGE')}
			>
				{t.switchImg}
			</button>

			<button
				className={`${styles.button} ${
					slide === 'DETAILS' ? styles.active : ''
				}`}
				onClick={() => onSwitch('DETAILS')}
			>
				{t.switchDet}
			</button>
		</div>
	);
}

export default SwitcherSlider;
