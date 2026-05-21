import Kosmoavto from '../../../assets/img/carousel3Dimg/kosmoavto.png';
import Umt from '../../../assets/img/carousel3Dimg/umt.png';

export interface ICarouselItem {
  id: string | number;
  imageUrl: string;
  alt?: string;
  title?: string;
  link?: string;
}

export const carouselData: ICarouselItem[] = [
  {
    id: 1,
    imageUrl: Kosmoavto,
    alt: 'Kosmoavto Project',
    title: 'Kosmoavto',
    link: 'https://kosmoavto.limitz.ru/',
  },
  {
    id: 2,
    imageUrl: Umt,
    alt: 'Umt Project',
    title: 'Umt',
    link: 'https://uralmt.com/',
  },
  {
    id: 3,
    imageUrl: Kosmoavto,
    alt: 'Kosmoavto Project',
    title: 'Kosmoavto',
    link: 'https://kosmoavto.limitz.ru/',
  },
  {
    id: 4,
    imageUrl: Umt,
    alt: 'Umt Project',
    title: 'Umt',
    link: 'https://uralmt.com/',
  },
  {
    id: 5,
    imageUrl: Kosmoavto,
    alt: 'Kosmoavto Project',
    title: 'Kosmoavto',
    link: 'https://kosmoavto.limitz.ru/',
  },
  {
    id: 6,
    imageUrl: Umt,
    alt: 'Umt Project',
    title: 'Umt',
    link: 'https://uralmt.com/',
    },
  {
    id: 7,
    imageUrl: Kosmoavto,
    alt: 'Kosmoavto Project',
    title: 'Kosmoavto',
    link: 'https://kosmoavto.limitz.ru/',
  },
  {
    id: 8,
    imageUrl: Umt,
    alt: 'Umt Project',
    title: 'Umt',
    link: 'https://uralmt.com/',
    },
];