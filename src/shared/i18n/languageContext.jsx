import { createContext, useContext, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
	const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');

	const switchLang = (newLang) => {
		setLang(newLang);
		localStorage.setItem('lang', newLang);
	};

	const value = {
		lang, // текущий язык
		switchLang, // переключение
		t: translations[lang], // готовые переводы
	};

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	return useContext(LanguageContext);
}
