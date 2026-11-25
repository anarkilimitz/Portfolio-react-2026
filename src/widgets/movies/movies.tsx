import { DragDropProvider } from '@dnd-kit/react';
import { isSortable } from '@dnd-kit/react/sortable';
import { ArrowUpDown, GripVertical, RotateCcw } from 'lucide-react';
import { Button, Container, Row } from 'react-bootstrap';

import { useMovieOrder } from '../../shared/hooks/useMovieOrder';
import { moviesData } from './moviesData';
import { SortableMovieCard } from './components/SortableMovieCard';

import styles from './movies.module.scss';

export function Movies() {
	const { movieOrder, saveOrder, resetOrder } = useMovieOrder();

	const movies = movieOrder
		.map((id) => moviesData.find((movie) => movie.id === id))
		.filter((movie) => movie !== undefined);

	const handleDragEnd = (
		event: Parameters<
			NonNullable<React.ComponentProps<typeof DragDropProvider>['onDragEnd']>
		>[0]
	) => {
		if (event.canceled) return;

		const { source } = event.operation;

		if (!isSortable(source)) return;

		const { initialIndex, index } = source;

		if (initialIndex === index) return;

		const newOrder = [...movieOrder];
		const [movedMovie] = newOrder.splice(initialIndex, 1);

		if (movedMovie === undefined) return;

		newOrder.splice(index, 0, movedMovie);

		saveOrder(newOrder);
	};

	return (
		<section className={styles.moviesSection} id="movies">
			<Container>
				<div className={styles.moviesHeader}>
					<div className={styles.moviesHeading}>
						<h2 className={styles.moviesTitle}>Интерактивная панель</h2>

						<p className={styles.moviesSubtitle}>
							<GripVertical size={20} />
							<span>Перетащи, чтобы изменить место в списке</span>
							<ArrowUpDown size={20} />
						</p>
					</div>

					<Button
						variant="outline-light"
						className={styles.moviesReset}
						onClick={resetOrder}
					>
						<RotateCcw size={16} />
						<span>Сбросить порядок</span>
					</Button>
				</div>

				<DragDropProvider onDragEnd={handleDragEnd}>
					<Row className={styles.moviesGrid}>
						{movies.map((movie, index) => (
							<SortableMovieCard key={movie.id} movie={movie} index={index} />
						))}
					</Row>
				</DragDropProvider>
			</Container>
		</section>
	);
}

export default Movies;
