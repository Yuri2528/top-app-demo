import { useEffect, useState } from "react";


export const useScrollY = (): number => {

	const isBrowser = typeof window !== 'undefined';

	const [scrollY, setScrollY] = useState<number>(0);

	const hanldleScroll = () => {

		const currentScrollY = isBrowser ? window.scrollY : 0;
		setScrollY(currentScrollY);


	};

	useEffect(() => {

		window.addEventListener('scroll', hanldleScroll, { passive: true });

		return () => window.removeEventListener('scroll', hanldleScroll);
	}, []);

	return scrollY;
};