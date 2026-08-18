import SofaSlider from '../../../assets/img/slider/sofadbslider.png';
import Wedding from '../../../assets/img/slider/wedding.png';
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

export interface ITranslations {
	sofaTitle: string;
	sofaText: string;
	sofaDesc: string;
	coffeeTitle: string;
	coffeeText: string;
	coffeeDesc: string;
	kosmoTitle: string;
	kosmoText: string;
	kosmoDesc: string;
	umtTitle: string;
	umtText: string;
	umtDesc: string;
	parallaxTitle: string;
	parallaxText: string;
	parallaxDesc: string;
	weddingTitle: string;
	weddingText: string;
	weddingDesc: string;
	comments: string;
}

export const getSliderData = (t: ITranslations): ISliderItem[] => [
	{
		id: 1,
		image: SofaSlider,
		title: t.sofaTitle,
		text: t.sofaText,
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
		commit: t.comments,
		description: t.sofaDesc,
	},
	{
		id: 2,
		image: Wedding,
		title: t.weddingTitle,
		text: t.weddingText,
		tags: [
			{ text: 'React', bg: 'primary' },
			{ text: 'React Compiler', bg: 'mailer' },
			{ text: 'Tailwind', bg: 'bg-tailwind ' },
			{ text: 'GSAP', bg: 'success' },
			{ text: 'ScrollTrigger', bg: 'bg-scrolltrigger' },
			{ text: 'Vite', bg: 'purple' },
			{ text: 'Web3Forms', bg: 'mailer' },
			{ text: 'Swiper', bg: 'bg-swiper' },
			{ text: 'Aug 2026', bg: 'secondary' },
		],
		link: 'https://wedding-landing-dusky.vercel.app/',
		linkGit: 'https://github.com/anarkilimitz/wedding-landing',
		commit: t.comments,
		description: t.weddingDesc,
	},
	{
		id: 3,
		image: CoffeeImg,
		title: t.coffeeTitle,
		text: t.coffeeText,
		tags: [
			{ text: 'React', bg: 'primary' },
			{ text: 'Filter', bg: 'dark' },
			{ text: 'Mock Data', bg: 'bg-mock' },
			{ text: '2025', bg: 'secondary' },
		],
		link: 'https://coffee-shop-react-jade.vercel.app/goods',
		linkGit: 'https://github.com/anarkilimitz/Coffee-shop-react',
		commit: t.comments,
		description: t.coffeeDesc,
	},
	{
		id: 4,
		image: Kosmoavto,
		title: t.kosmoTitle,
		text: t.kosmoText,
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
		commit: t.comments,
		description: t.kosmoDesc,
	},
	{
		id: 5,
		image: Umtnpo,
		title: t.umtTitle,
		text: t.umtText,
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
		commit: t.comments,
		description: t.umtDesc,
	},
	{
		id: 6,
		image: Everest,
		title: t.parallaxTitle,
		text: t.parallaxText,
		tags: [
			{ text: 'HTML', bg: 'danger' },
			{ text: 'CSS', bg: 'primary' },
			{ text: 'JS', bg: 'warning' },
			{ text: 'Jul 2025', bg: 'secondary' },
		],
		link: 'https://parallax-mountains-ten.vercel.app',
		linkGit: 'https://github.com/anarkilimitz/Parallax-mountains',
		commit: t.comments,
		description: t.parallaxDesc,
	},
];
