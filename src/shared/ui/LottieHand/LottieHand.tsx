import { useRef } from 'react';
import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import handAnimation from '../../../assets/icons/hand-animation.json';

export function LottieHand() {
	const animationRef = useRef<LottieRefCurrentProps>(null);

	return (
		<Lottie
			lottieRef={animationRef}
			animationData={handAnimation}
			loop
			autoplay
			onDOMLoaded={() => {
				animationRef.current?.setSpeed(2);
			}}
		/>
	);
}
