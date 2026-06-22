import SofaSlider from '../../../assets/img/slider/sofadbslider.png';
import CoffeeImg from '../../../assets/img/slider/Coffee.png';
import Kosmoavto from '../../../assets/img/slider/kosmoavto.png';
import Everest from '../../../assets/img/slider/everest.png';
import Umtnpo from '../../../assets/img/slider/umtnpo.png';

export interface ITag {
	text: string;
	bg: string;
}

export interface ISliderItem {
	id: number;
	image: string;
	title: string;
	text: string;
	tags: ITag[];
	link: string;
	linkGit?: string;
	commit: string;
	description: string;
}

export const sliderData: ISliderItem[] = [
	{
		id: 1,
		image: SofaSlider,
		title: 'Первый Мягкий',
		text: 'Каталожный сайт диванов.',
		tags: [
			{ text: 'HTML', bg: 'danger' },
			{ text: 'CSS', bg: 'primary' },
			{ text: 'JS', bg: 'warning' },
			{ text: 'GSAP / Lenis', bg: 'success' },
			{ text: 'SplitType', bg: 'info' },
			{ text: 'Vite', bg: 'purple' },
			{ text: 'PHPMailer', bg: 'mailer' },
			{ text: 'Supabase', bg: 'mint' },
			{ text: '2026', bg: 'secondary' },
		],
		link: 'https://sofa-amber.vercel.app',
		linkGit: 'https://github.com/anarkilimitz/Sofa',
		commit: 'Комментарии',
		description: `Сайт создан в двух вариантах. Данный по ссылке: работает с локальным JSON. Этот же сайт реализовал с Supabase и собственной CMS для добавления в каталог товаров (в рамках обучения работы с Supabase). Архитектура фронта подготовлена к легкому переходу на полноценный бекенд. Сайт находится на стадии доработки макета и последующей адаптации.`,
	},
	{
		id: 2,
		image: CoffeeImg,
		title: 'Кофейня',
		text: 'Приложение создано по предоставленному макету.',
		tags: [
			{ text: 'React', bg: 'primary' },
			{ text: 'Filter', bg: 'dark' },
			{ text: 'Mock Data', bg: 'bg-mock' },
			{ text: '2025', bg: 'secondary' },
		],
		link: 'https://coffee.limitz.ru/',
		linkGit: 'https://github.com/anarkilimitz/Coffee-shop-react',
		commit: 'Комментарии',
		description: `Реализовал понятную архитектуру. Добавил фильтр по товарам. Создал массив с карточками товара для быстрого добавления.`,
	},
	{
		id: 3,
		image: Kosmoavto,
		title: 'KosmoAvto112',
		text: 'Лендинг по аренде такси, ремонту и покраске машин.',
		tags: [
			{ text: 'HTML', bg: 'danger' },
			{ text: 'CSS', bg: 'primary' },
			{ text: 'JS', bg: 'warning' },
			{ text: 'PHPMailer', bg: 'mailer' },
			{ text: 'Vite', bg: 'purple' },
			{ text: '2026', bg: 'secondary' },
		],
		link: 'https://kosmoavto112.ru',
		linkGit: 'https://github.com/anarkilimitz/autoservice-kosmonavtov-112',
		commit: 'Комментарии',
		description: `Реализовано 2 зависимых слайдера ДО/ПОСЛЕ. Аккордеоны со списком цен и услуг. Настроен PHPMailer `,
	},
	{
		id: 4,
		image: Umtnpo,
		title: 'Компания НПО УМТ',
		text: 'Коммерческий сайт на WordPress по продаже строительного оборудования.',
		tags: [
			{ text: 'HTML', bg: 'danger' },
			{ text: 'CSS', bg: 'primary' },
			{ text: 'JS', bg: 'warning' },
			{ text: 'WordPress', bg: 'wpbg' },
			{ text: 'ACF', bg: 'acf-slate' },
			{ text: 'WP Mail SMTP', bg: 'smtp-blue' },
			{ text: 'Slick-Slider', bg: 'bg-charcoal' },
			{ text: 'Gulp', bg: 'bg-gulp' },
			{ text: '2026', bg: 'secondary' },
		],
		link: 'https://uralmt.com',
		// linkGit: 'https://github.com/anarkilimitz/UMFFZ-2025-to-git',
		commit: 'Комментарии',
		description: `Сайт на WordPress c Advanced Custom Fields (ACF). Настроен плагин WP Mail SMTP для отправки почты.`,
	},
	{
		id: 5,
		image: Everest,
		title: 'Параллакс',
		text: 'Параллакс эффект с отслеживанием курсора указателя.',
		tags: [
			{ text: 'HTML', bg: 'danger' },
			{ text: 'CSS', bg: 'primary' },
			{ text: 'JS', bg: 'warning' },
			{ text: 'Jul 2025', bg: 'secondary' },
		],
		link: 'https://parallax-mountains-ten.vercel.app',
		linkGit: 'https://github.com/anarkilimitz/Parallax-mountains',
		commit: 'Комментарии',
		description: `Этот код реализует эффект параллакса для группы элементов.`,
	},
];
