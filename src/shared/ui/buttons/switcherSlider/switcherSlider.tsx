import styles from './switcherSlider.module.scss';

import { useLanguage } from '../../../i18n/languageContext';

type SlideType = 'IMAGE' | 'DETAILS';

type SwitcherSliderProps = {
	slide: SlideType;
	onSwitch: (slide: SlideType) => void;
};


function SwitcherSlider({
	slide,
	onSwitch,
}: SwitcherSliderProps) {
	const { t } = useLanguage() as {
		t: {
			switchImg: string;
			switchDet: string;
		};
	};

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
