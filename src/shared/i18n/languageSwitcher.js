import styles from './languageSwitcher.module.scss';

import { Button } from 'react-bootstrap';
import { useLanguage } from './languageContext';

export function LanguageSwitcher() {
	const { lang, switchLang } = useLanguage();

	return (
		<div className={styles.customSwitcher}>
			<Button
				variant="none"
				className={`${styles.customSwitcherBtn} ${
					lang === 'en' ? styles.active : ''
				}`}
				onClick={() => switchLang('en')}
			>
				EN
			</Button>

			<Button
				variant="none"
				className={`${styles.customSwitcherBtn} ${
					lang === 'ru' ? styles.active : ''
				}`}
				onClick={() => switchLang('ru')}
			>
				RU
			</Button>
		</div>
	);
}
