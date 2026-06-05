import CoffeeImg from '../../../assets/img/slider/Coffee.png';
import UmffzImg from '../../../assets/img/slider/umffz.png';
import RentalImg from '../../../assets/img/slider/rental..png';

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
	description: string;
}

export const sliderData: ISliderItem[] = [
	{
		id: 1,
		image: CoffeeImg,
		title: 'Кофейня «Bean & Brew»',
		text: 'Разработка сайта, брендинг, фотосъёмка интерьера и создание фирменного стиля упаковки.',
		tags: [
			{ text: 'React', bg: 'primary' },
			{ text: 'Filter', bg: 'dark' },
			{ text: 'Branding', bg: 'secondary' },
			{ text: '2025', bg: 'success' },
		],
		link: 'https://coffee.limitz.ru/',
		linkGit: 'https://github.com/anarkilimitz/Coffee-shop-react',
		description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta expedita cum, ratione quia fuga perferendis. Quo similique id modi animi minus at voluptate sit repellendus doloremque culpa. Quod, sapiente consequuntur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptate rem, laboriosam beatae consequatur ratione fuga sapiente voluptates, nam harum culpa ad quis obcaecati corporis facilis adipisci praesentium impedit placeat?`,
	},
	{
		id: 2,
		image: UmffzImg,
		title: 'Федерация футбола UMFFZ',
		text: 'Сайт с расписанием командных игр и официальными документами.',
		tags: [
			{ text: 'HTML', bg: 'danger' },
			{ text: 'CSS', bg: 'primary' },
			{ text: 'JS', bg: 'warning' },
			{ text: 'Google Sheets', bg: 'success' },
			{ text: '2024', bg: 'secondary' },
		],
		link: 'https://anarkilimitz.github.io/UMFFZ-2025-to-git/',
		linkGit: 'https://github.com/anarkilimitz/UMFFZ-2025-to-git',
		description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta expedita cum, ratione quia fuga perferendis. Quo similique id modi animi minus at voluptate sit repellendus doloremque culpa. Quod, sapiente consequuntur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptate rem, laboriosam beatae consequatur ratione fuga sapiente voluptates, nam harum culpa ad quis obcaecati corporis facilis adipisci praesentium impedit placeat?`,
	},
	{
		id: 3,
		image: RentalImg,
		title: 'Rental Car — аренда авто',
		text: 'Полноценный сервис каршеринга: мобильное приложение + админ-панель + сайт. Интеграция с платёжными системами и GPS-трекингом.',
		tags: [
			{ text: 'React', bg: 'primary' },
			{ text: '2024', bg: 'secondary' },
			{ text: 'Branding', bg: 'success' },
		],
		link: 'https://beanandbrew.coffee',
		description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta expedita cum, ratione quia fuga perferendis. Quo similique id modi animi minus at voluptate sit repellendus doloremque culpa. Quod, sapiente consequuntur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptate rem, laboriosam beatae consequatur ratione fuga sapiente voluptates, nam harum culpa ad quis obcaecati corporis facilis adipisci praesentium impedit placeat?`,
	},
];
