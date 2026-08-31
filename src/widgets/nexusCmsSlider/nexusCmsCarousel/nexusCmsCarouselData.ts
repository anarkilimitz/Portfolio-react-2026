import loginCms from '../../../assets/img/nexusCms/login.png'
import dashboard from '../../../assets/img/nexusCms/dashboard.png';
import content from '../../../assets/img/nexusCms/content.png';
import products from '../../../assets/img/nexusCms/products.png';
import media from '../../../assets/img/nexusCms/media.png';
import mediadelete from '../../../assets/img/nexusCms/mediadelete.png';
import navigations from '../../../assets/img/nexusCms/navigations.png';
import services from '../../../assets/img/nexusCms/services.png';
import servicesoptions from '../../../assets/img/nexusCms/servicesoptions.png';
import settings from '../../../assets/img/nexusCms/settings.png';

export interface INexusCmsSlide {
	id: number;
	image: string;
	alt: string;
}

export const nexusCmsCarouselData: INexusCmsSlide[] = [
	{
		id: 1,
		image: loginCms,
		alt: 'Nexus CMS logincms',
	},
	{
		id: 2,
		image: dashboard,
		alt: 'Nexus CMS dashboard',
	},
	{
		id: 3,
		image: content,
		alt: 'Nexus CMS content',
	},
	{
		id: 4,
		image: products,
		alt: 'Nexus CMS products',
	},
	{
		id: 5,
		image: media,
		alt: 'Nexus CMS media',
	},
	{
		id: 6,
		image: mediadelete,
		alt: 'Nexus CMS mediadelete',
	},
	{
		id: 7,
		image: navigations,
		alt: 'Nexus CMS navigations',
	},
	{
		id: 8,
		image: services,
		alt: 'Nexus CMS services',
	},
	{
		id: 9,
		image: servicesoptions,
		alt: 'Nexus CMS servicesoptions',
	},
	{
		id: 10,
		image: settings,
		alt: 'Nexus CMS settings',
	},
];
