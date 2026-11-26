import { useSortable } from '@dnd-kit/react/sortable';
import { GripVertical } from 'lucide-react';
import { Card, Col } from 'react-bootstrap';

import type { Movie } from '../moviesData';

import styles from '../movies.module.scss';

import { LottieHand } from '../../../shared/ui/LottieHand/LottieHand';

interface SortableMovieCardProps {
	movie: Movie;
	index: number;
}

export function SortableMovieCard({ movie, index }: SortableMovieCardProps) {
	const { ref, handleRef, isDragging } = useSortable({
		id: movie.id,
		index,
	});

	return (
		<Col xs={6} md={6} lg={3} ref={ref}>
			<div className={styles.movieCardWrapper}>
				<Card
					className={`${styles.movieCard} ${
						isDragging ? styles.movieCardDragging : ''
					}`}
				>
					<div className={styles.movieCardPoster}>
						<img
							src={movie.poster}
							alt={`Постер: ${movie.title}`}
							loading="lazy"
							draggable={false}
						/>

						<span className={styles.movieCardType}>
							{movie.type === 'movie' ? 'Фильм' : 'Сериал'}
						</span>
					</div>

					<Card.Body className={styles.movieCardBody}>
						<Card.Title className={styles.movieCardTitle}>
							{movie.title}
						</Card.Title>

						<button
							ref={handleRef}
							type="button"
							className={styles.movieCardDragHandle}
							aria-label={`Переместить: ${movie.title}`}
							title="Перетащить карточку"
						>
							<GripVertical size={20} />
						</button>
					</Card.Body>
				</Card>
				{index === 0 && (
					<div
						className={`${styles.movieCardDragHint} ${
							isDragging ? styles.movieCardDragHintHidden : ''
						}`}
					>
						<LottieHand />
					</div>
				)}
			</div>
		</Col>
	);
}
