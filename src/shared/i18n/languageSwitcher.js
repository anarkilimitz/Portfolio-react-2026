import { Button, ButtonGroup } from 'react-bootstrap';
import { useLanguage } from './languageContext';

export function LanguageSwitcher() {
	const { lang, switchLang } = useLanguage();

	return (
		<ButtonGroup>
			<Button
				variant={lang === 'en' ? 'primary' : 'dark'}
				onClick={() => switchLang('en')}
			>
				EN
			</Button>

			<Button
				variant={lang === 'ru' ? 'primary' : 'dark'}
				onClick={() => switchLang('ru')}
			>
				RU
			</Button>
		</ButtonGroup>
	);
}
