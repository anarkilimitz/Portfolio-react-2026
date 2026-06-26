import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './app/styles/global.scss';

import App from './app/App';
import { LanguageProvider } from './shared/i18n/languageContext';

// тип для TypeScript, чтобы не ругался
declare global {
	interface Window {
		ym: (id: number, method: string, ...args: unknown[]) => void;
	}
}

const initYandexMetrika = () => {
	if (typeof window.ym !== 'undefined') return;

	const script = document.createElement('script');
	script.type = 'text/javascript';

	script.innerHTML = `
        (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=110162735', 'ym');

        ym(110162735, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
    `;
	document.head.appendChild(script);
};

// запуск отрисовки до рендера
initYandexMetrika();

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<LanguageProvider>
				<App />
			</LanguageProvider>
		</BrowserRouter>
	</React.StrictMode>
);
