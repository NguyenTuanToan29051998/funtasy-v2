import React from 'react';
import { cn } from '../../../utils';

interface Props {
	className?: string;
	children: React.ReactNode;
}

export const Button: React.FC<Props> = (props) => {
	const { className, children } = props;
	return (
		<button className={cn(className, 'relative font-ppNeueMontrealMedium bg-transparent text-black hover:text-white text-sm lg:text-base px-3 py-[10px] lg:px-4 lg:py-2 rounded-full overflow-hidden group focus:outline-none focus:ring-0 border-0')}>
			<span className="relative z-20 transition-colors duration-150">{children}</span>
			<span className="absolute inset-0 bg-black scale-[0.95] transition-transform duration-150 ease-in-out z-0 rounded-full"></span>
			<span className="absolute inset-0 bg-[#CEF17B] group-hover:scale-x-0 transition-transform duration-150 ease-in-out origin-center z-10 rounded-full"></span>
		</button>
	);
};
