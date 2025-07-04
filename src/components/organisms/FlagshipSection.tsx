import FuntasyChart from '../../assets/images/funtasy-chart.png';
import ScaleIcon from '../../assets/images/scale-icon.gif';
import LayoutGrid from '../../assets/images/layout-grid.gif';
import LineChart from '../../assets/images/line-chart.gif';
import Sparkles from '../../assets/images/sparkles-icon.gif';
import { useState } from 'react';

const FlagshipSection = () => {
	const [hoverText, setHoverText] = useState(false);

	const chars1 = "flagship".split("");
	const chars2 = "platform".split("");

	const normalClasses = [
		["inline-block transition-transform duration-500 ease-out translate-y-0", "absolute top-0 transition-transform duration-500 ease-out translate-y-0"],
		["inline-block transition-transform duration-500 ease-out translate-y-0", "absolute top-0 transition-transform duration-500 ease-out translate-y-0"],
		["inline-block transition-transform duration-500 ease-out translate-y-0", "absolute top-0 transition-transform duration-500 ease-out translate-y-0"],
		["inline-block transition-transform duration-500 ease-out translate-y-0", "absolute top-0 transition-transform duration-500 ease-out translate-y-0"],
		["inline-block transition-transform duration-500 ease-out translate-y-0", "absolute top-0 transition-transform duration-500 ease-out translate-y-0"],
		["inline-block transition-transform duration-500 ease-out translate-y-0", "absolute top-0 transition-transform duration-500 ease-out translate-y-0"],
		["inline-block transition-transform duration-500 ease-out translate-y-0", "absolute top-0 transition-transform duration-500 ease-out translate-y-0"],
		["inline-block transition-transform duration-500 ease-out translate-y-0", "absolute top-0 transition-transform duration-500 ease-out translate-y-0"]
	];
	const hoverClasses = [
		["inline-block transition-transform duration-500 ease-out translate-y-0", "absolute top-0 transition-transform duration-500 ease-out translate-y-0"],
		["inline-block transition-transform duration-500 ease-out translate-y-[16px]", "absolute top-0 transition-transform duration-500 ease-out -translate-y-[16px]"],
		["inline-block transition-transform duration-500 ease-out translate-y-[37px]", "absolute top-0 transition-transform duration-500 ease-out -translate-y-[37px]"],
		["inline-block transition-transform duration-500 ease-out translate-y-[64px]", "absolute top-0 transition-transform duration-500 ease-out -translate-y-[60px]"],
		["inline-block transition-transform duration-500 ease-out translate-y-[80px]", "absolute top-0 transition-transform duration-500 ease-out -translate-y-[80px]"],
		["inline-block transition-transform duration-500 ease-out translate-y-[64px]", "absolute top-0 transition-transform duration-500 ease-out -translate-y-[60px]"],
		["inline-block transition-transform duration-500 ease-out translate-y-[30px]", "absolute top-0 transition-transform duration-500 ease-out -translate-y-[30px]"],
		["inline-block transition-transform duration-500 ease-out translate-y-0", "absolute top-0 transition-transform duration-500 ease-out translate-y-0"]
	];

	return (
		<>
			<div className="bg-[#E0FFC4] h-auto lg:h-[900px] w-full relative pt-[75px] lg:pt-[137px]">
				<div className='flex flex-col items-center'>
					<div
						className="hidden md:flex font-ppNeueMontrealMedium text-black text-[32px] font-light"
						onMouseEnter={() => setHoverText(true)}
						onMouseLeave={() => setHoverText(false)}
					>
						Meet the
						<div className="flex px-[6px] text-[#084734]">
							<div
								className="css-f90u5u flex"
								onMouseEnter={() => setHoverText(true)}
								onMouseLeave={() => setHoverText(false)}
							>
								{chars1.map((char, i) => (
									<div className="inline-block text-[#33998c] px-1 relative" key={i}>
										<div className={hoverText ? hoverClasses[i][0] : normalClasses[i][0]}>{char}</div>
										<div className={hoverText ? hoverClasses[i][1] : normalClasses[i][1]}>{char}</div>
									</div>
								))}
							</div>
							<span className="w-2 inline-block"></span>
							<div
								className="css-f90u5u flex"
								onMouseEnter={() => setHoverText(true)}
								onMouseLeave={() => setHoverText(false)}
							>
								{chars2.map((char, i) => (
									<div className="inline-block text-[#33998c] px-1 relative" key={i}>
										<div className={hoverText ? hoverClasses[i][0] : normalClasses[i][0]}>{char}</div>
										<div className={hoverText ? hoverClasses[i][1] : normalClasses[i][1]}>{char}</div>
									</div>
								))}
							</div>
						</div>
						on Aptos
					</div>
					<p className="block md:hidden font-ppNeueMontrealMedium text-2xl font-neue-montreal text-center">
						Meet the <span className='text-[#084734]'>f l a g s h i p <br />&nbsp;&nbsp; p l a t f o r m <br /></span>on Aptos
					</p>
					<div className="text-black text-center text-base lg:text-[20px] font-normal leading-none tracking-[0.02em] mt-3">
						<p>Anyone can create coins</p>
						<p>Anyone has access to buy and sell from the start</p>
					</div>

					<div className="mt-6 mb-[52px] lg:my-[71px] grid gap-9 grid-cols-1 lg:grid-cols-[auto_1fr_auto] px-[20px] lg:px-[50px] max-w-[2000px] mx-auto">
						<div className="block w-[330px] h-[196px] rounded-[12px] lg:hidden">
							<img src={FuntasyChart} alt="" className="css-8atqhb" />
						</div>
						<div className="grid gap-6 h-full grid-rows-2 items-center justify-center min-w-0">
							<div className="flex gap-3 items-center">
								<img src={LayoutGrid} alt="LayoutGrid" className="w-[42px] h-[42px] lg:w-[62px] lg:h-[62px]" />
								<div className="flex flex-col items-start gap-2 justify-center max-w-[252px] lg:max-w-[184px]">
									<div className="font-ppNeueMontrealMedium text-base leading-[108%] tracking-normal text-transparent bg-gradient-to-r from-[#0A2A25] to-[#186B4F] bg-clip-text text-center">3-click coin creation</div>
									<div className="text-[#565656] text-sm leading-[1.2]">
										Create a token in seconds — name it, upload an image, pay a tiny fee. No coding needed.
									</div>
								</div>
							</div>
							<div className="flex gap-3 items-center">
								<img src={LineChart} alt="LineChart" className="w-[42px] h-[42px] lg:w-[62px] lg:h-[62px]" />
								<div className="flex flex-col items-start gap-2 justify-center max-w-[252px] lg:max-w-[184px]">
									<div className="font-ppNeueMontrealMedium text-base leading-[108%] tracking-normal text-transparent bg-gradient-to-r from-[#0A2A25] to-[#186B4F] bg-clip-text text-center">Price goes wow!</div>
									<div className="text-[#565656] text-sm leading-[1.2]">
										More buyers? Higher price. Early birds get the juiciest gains on the curve.
									</div>
								</div>
							</div>
						</div>
						<div className="hidden lg:block lg:w-[330px] lg:h-[196px] xl:w-[631px] xl:h-[376px] rounded-[12px]">
							<img src={FuntasyChart} alt="" className="css-8atqhb" />
						</div>
						<div className="grid gap-6 h-full grid-rows-2 items-center justify-center min-w-0">
							<div className="flex gap-3 items-center">
								<img src={Sparkles} alt="Sparkles" className="w-[42px] h-[42px] lg:w-[62px] lg:h-[62px]" />
								<div className="flex flex-col items-start gap-2 justify-center max-w-[252px] lg:max-w-[184px]">
									<div className="font-ppNeueMontrealMedium text-base leading-[108%] tracking-normal text-transparent bg-gradient-to-r from-[#0A2A25] to-[#186B4F] bg-clip-text text-center">Security</div>
									<div className="text-[#565656] text-sm leading-[1.2]">
										Standardized smart contracts help keep launches fair and safer for everyone.
									</div>
								</div>
							</div>
							<div className="flex gap-3 items-center">
								<img src={ScaleIcon} alt="Scale" className="w-[42px] h-[42px] lg:w-[62px] lg:h-[62px]" />
								<div className="flex flex-col items-start gap-2 justify-center max-w-[252px] lg:max-w-[184px]">
									<div className="font-ppNeueMontrealMedium text-base leading-[108%] tracking-normal text-transparent bg-gradient-to-r from-[#0A2A25] to-[#186B4F] bg-clip-text text-center">Fair for all</div>
									<div className="text-[#565656] text-sm leading-[1.2]">
										No pre-sales. No special deals. Everyone gets in at the same starting line.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-[75px] lg:mb-0 w-full max-w-[306px] md:max-w-[1002px] rounded-xl py-[22px] border border-[#5EC09F] lg:mx-auto grid grid-cols-2 gap-y-4 md:flex md:h-[99px]">
						<div className="flex gap-[6px] w-full flex-col items-center py-2">
							<span className="text-[15px] font-normal leading-[100%] text-center text-[#186B4F]">Users</span>
							<span className="text-[26px] font-medium leading-[100%] text-center text-[#1E1E1E] font-ppNeueMontrealMedium">200,000</span>
						</div>
						<div className="hidden md:block w-[1px] h-12 bg-[#5EC09F] opacity-50"></div>
						<div className="flex gap-[6px] w-full flex-col items-center py-2">
							<span className="text-[15px] font-normal leading-[100%] text-center text-[#186B4F]">Tokens</span>
							<span className="text-[26px] font-medium leading-[100%] text-center text-[#1E1E1E] font-ppNeueMontrealMedium">100</span>
						</div>
						<div className="hidden md:block w-[1px] h-12 bg-[#5EC09F] opacity-50"></div>
						<div className="flex gap-[6px] w-full flex-col items-center py-2">
							<span className="text-[15px] font-normal leading-[100%] text-center text-[#186B4F]">Transactions</span>
							<span className="text-[26px] font-medium leading-[100%] text-center text-[#1E1E1E] font-ppNeueMontrealMedium">7,382,384</span>
						</div>
						<div className="hidden md:block w-[1px] h-12 bg-[#5EC09F] opacity-50"></div>
						<div className="flex gap-[6px] w-full flex-col items-center py-2">
							<span className="text-[15px] font-normal leading-[100%] text-center text-[#186B4F]">Accumulated Volume</span>
							<span className="text-[26px] font-medium leading-[100%] text-center text-[#1E1E1E] font-ppNeueMontrealMedium">$10M</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FlagshipSection;