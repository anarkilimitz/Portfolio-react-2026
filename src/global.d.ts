declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.module.css' {
	const classes: { [key: string]: string };
	export default classes;
}

// Картинки
declare module '*.png' {
	const src: string;
	export default src;
}

declare module '*.jpg' {
	const src: string;
	export default src;
}

declare module '*.jpeg' {
	const src: string;
	export default src;
}

declare module '*.gif' {
	const src: string;
	export default src;
}

declare module '*.svg' {
	const src: string;
	export default src;
}

declare module '*.webp' {
	const src: string;
	export default src;
}

// для обычных .scss файлов (глобальные стили)
declare module '*.scss' {
	const content: { [className: string]: string };
	export default content;
}

// для обычных .css файлов (например, bootstrap)
declare module '*.css' {
	const content: { [className: string]: string };
	export default content;
}

// Бутстрэп
declare module 'bootstrap' {
	export class Carousel {
		constructor(element: Element | string, options?: any);
		to(index: number): void;
		dispose(): void;
	}
}
