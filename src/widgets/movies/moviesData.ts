import mrRobotPoster from '../../assets/img/movies/mr-robot.jpg';
import yellowstonePoster from '../../assets/img/movies/yellowstone.jpg';
import gameOfThronesPoster from '../../assets/img/movies/game-of-thrones.jpg';
import guardiansPoster from '../../assets/img/movies/guardians-of-the-galaxy.jpg';
import dunePoster from '../../assets/img/movies/dune.jpg';
import spiderManPoster from '../../assets/img/movies/spider-man.jpg';
import clarksonsFarmPoster from '../../assets/img/movies/clarksons-farm.jpg';
import piratesPoster from '../../assets/img/movies/pirates-of-the-caribbean.jpg';

export interface Movie {
	id: string;
	title: string;
	type: 'movie' | 'series';
	poster: string;
}

export const moviesData: Movie[] = [
	{
		id: 'mr-robot',
		title: 'Мистер Робот',
		type: 'series',
		poster: mrRobotPoster,
	},
	{
		id: 'yellowstone',
		title: 'Йеллоустоун',
		type: 'series',
		poster: yellowstonePoster,
	},
	{
		id: 'game-of-thrones',
		title: 'Игра престолов',
		type: 'series',
		poster: gameOfThronesPoster,
	},
	{
		id: 'guardians-of-the-galaxy',
		title: 'Стражи Галактики',
		type: 'movie',
		poster: guardiansPoster,
	},
	{
		id: 'dune',
		title: 'Дюна',
		type: 'movie',
		poster: dunePoster,
	},
	{
		id: 'spider-man',
		title: 'Человек-паук',
		type: 'movie',
		poster: spiderManPoster,
	},
	{
		id: 'clarksons-farm',
		title: 'Ферма Кларксона',
		type: 'series',
		poster: clarksonsFarmPoster,
	},
	{
		id: 'pirates-of-the-caribbean',
		title: 'Пираты Карибского моря',
		type: 'movie',
		poster: piratesPoster,
	},
];
