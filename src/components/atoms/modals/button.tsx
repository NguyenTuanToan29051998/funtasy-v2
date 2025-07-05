import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Button: React.FC<Props> = (props) => {
	const { children } = props;
	return (
		<button className="relative font-ppNeueMontrealMedium bg-black text-black hover:text-white text-sm lg:text-base px-3 py-[10px] lg:px-4 lg:py-2 rounded-3xl overflow-hidden group">
			<span className="relative z-10 transition-colors duration-150">{children}</span>
			<span className="absolute inset-0 bg-[#CEF17B] group-hover:scale-x-0 transition-transform duration-150 ease-in-out origin-center z-0"></span>
		</button>
	);
};
