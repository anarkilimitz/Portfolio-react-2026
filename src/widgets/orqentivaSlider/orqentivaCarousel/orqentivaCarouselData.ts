import login from '../../../assets/img/orqentiva/or-account.png';
import dashboard from '../../../assets/img/orqentiva/or-dashboard.png';
import wbAccounts from '../../../assets/img/orqentiva/or-api.png';
import products from '../../../assets/img/orqentiva/or-catalog.png';
import stocks from '../../../assets/img/orqentiva/or-box.png';
import orders from '../../../assets/img/orqentiva/or-opendash.png';
import analytics from '../../../assets/img/orqentiva/or-diagr.png';
import synchronization from '../../../assets/img/orqentiva/or-pass.png';
import settings from '../../../assets/img/orqentiva/or-photo.png';

export interface IOrqentivaSlide {
	id: number;
	image: string;
	alt: string;
}

export const orqentivaCarouselData: IOrqentivaSlide[] = [
	{
		id: 1,
		image: login,
		alt: 'Orqentiva authentication',
	},
	{
		id: 2,
		image: dashboard,
		alt: 'Orqentiva dashboard',
	},
	{
		id: 3,
		image: wbAccounts,
		alt: 'Orqentiva Wildberries accounts',
	},
	{
		id: 4,
		image: products,
		alt: 'Orqentiva product management',
	},
	{
		id: 5,
		image: stocks,
		alt: 'Orqentiva inventory management',
	},
	{
		id: 6,
		image: orders,
		alt: 'Orqentiva orders and sales',
	},
	{
		id: 7,
		image: analytics,
		alt: 'Orqentiva analytics',
	},
	{
		id: 8,
		image: synchronization,
		alt: 'Orqentiva data synchronization',
	},
	{
		id: 9,
		image: settings,
		alt: 'Orqentiva settings',
	},
];
