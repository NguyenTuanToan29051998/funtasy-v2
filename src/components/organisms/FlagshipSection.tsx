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
			<div className="bg-[#E0FFC4] h-[900px] w-full] relative lg:pt-[137px]">
				<div className='flex flex-col items-center'>
					<div
						className="font-ppNeueMontrealMedium flex text-black text-[32px] font-light"
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
									<div className="inline-block text-[#33998c] px-[6px] relative" key={i}>
										<div className={hoverText ? hoverClasses[i][0] : normalClasses[i][0]}>{char}</div>
										<div className={hoverText ? hoverClasses[i][1] : normalClasses[i][1]}>{char}</div>
									</div>
								))}
							</div>
							<span className="w-4 inline-block"></span>
							<div
								className="css-f90u5u flex"
								onMouseEnter={() => setHoverText(true)}
								onMouseLeave={() => setHoverText(false)}
							>
								{chars2.map((char, i) => (
									<div className="inline-block text-[#33998c] px-[6px] relative" key={i}>
										<div className={hoverText ? hoverClasses[i][0] : normalClasses[i][0]}>{char}</div>
										<div className={hoverText ? hoverClasses[i][1] : normalClasses[i][1]}>{char}</div>
									</div>
								))}
							</div>
						</div>
						on Aptos
					</div>
					<div className="text-black text-center text-[20px] font-normal leading-none tracking-[0.02em] mt-3">
						<p>Anyone can create coins</p>
						<p>Anyone has access to buy and sell from the start</p>
					</div>

					<div className="my-[71px] grid gap-9 grid-cols-[auto_1fr_auto] px-[50px] max-w-[2000px] mx-auto">
						<div className="grid h-full grid-rows-2 items-center justify-center min-w-0">
							<div className="flex gap-3">
								<img src={LayoutGrid} alt="LayoutGrid" className="w-[62px] h-[62px]" />
								<div className="flex flex-col items-start gap-2 justify-center max-w-[184px]">
									<div className="font-ppNeueMontrealMedium text-base leading-[108%] tracking-normal text-transparent bg-gradient-to-r from-[#0A2A25] to-[#186B4F] bg-clip-text text-center">3-click coin creation</div>
									<div className="text-[#565656] text-sm leading-[1.2]">
										Create a token in seconds — name it, upload an image, pay a tiny fee. No coding needed.
									</div>
								</div>
							</div>
							<div className="flex gap-3">
								<img src={LineChart} alt="LineChart" className="w-[62px] h-[62px]" />
								<div className="flex flex-col items-start gap-2 justify-center max-w-[184px]">
									<div className="font-ppNeueMontrealMedium text-base leading-[108%] tracking-normal text-transparent bg-gradient-to-r from-[#0A2A25] to-[#186B4F] bg-clip-text text-center">Price goes wow!</div>
									<div className="text-[#565656] text-sm leading-[1.2]">
										More buyers? Higher price. Early birds get the juiciest gains on the curve.
									</div>
								</div>
							</div>
						</div>
						<div className="w-[631px] h-[376px] rounded-[12px]">
							<img src={FuntasyChart} alt="" className="css-8atqhb" />
						</div>
						<div className="grid h-full grid-rows-2 items-center justify-center min-w-0">
							<div className="flex gap-3">
								<img src={Sparkles} alt="Sparkles" className="w-[62px] h-[62px]" />
								<div className="flex flex-col items-start gap-2 justify-center max-w-[184px]">
									<div className="font-ppNeueMontrealMedium text-base leading-[108%] tracking-normal text-transparent bg-gradient-to-r from-[#0A2A25] to-[#186B4F] bg-clip-text text-center">Security</div>
									<div className="text-[#565656] text-sm leading-[1.2]">
										Standardized smart contracts help keep launches fair and safer for everyone.
									</div>
								</div>
							</div>
							<div className="flex gap-3">
								<img src={ScaleIcon} alt="Scale" className="w-[62px] h-[62px]" />
								<div className="flex flex-col items-start gap-2 justify-center max-w-[184px]">
									<div className="font-ppNeueMontrealMedium text-base leading-[108%] tracking-normal text-transparent bg-gradient-to-r from-[#0A2A25] to-[#186B4F] bg-clip-text text-center">Fair for all</div>
									<div className="text-[#565656] text-sm leading-[1.2]">
										No pre-sales. No special deals. Everyone gets in at the same starting line.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex w-[1002px] h-[99px] rounded-xl py-[22px] border border-[#5EC09F]">
						<div className="flex-1 flex gap-[6px] flex-col items-center">
							<span className="text-[15px] font-normal leading-[100%] text-center text-[#186B4F]">Users</span>
							<span className="text-[26px] font-medium leading-[100%] text-center text-[#1E1E1E] font-ppNeueMontrealMedium">200,000</span>
						</div>
						<div className="w-px h-12 bg-[#5EC09F] opacity-50"></div>
						<div className="flex-1 flex gap-[6px] flex-col items-center">
							<span className="text-[15px] font-normal leading-[100%] text-center text-[#186B4F]">Tokens</span>
							<span className="text-[26px] font-medium leading-[100%] text-center text-[#1E1E1E] font-ppNeueMontrealMedium">100</span>
						</div>
						<div className="w-px h-12 bg-[#5EC09F] opacity-50"></div>
						<div className="flex-1 flex gap-[6px] flex-col items-center">
							<span className="text-[15px] font-normal leading-[100%] text-center text-[#186B4F]">Transactions</span>
							<span className="text-[26px] font-medium leading-[100%] text-center text-[#1E1E1E] font-ppNeueMontrealMedium">7,382,384</span>
						</div>
						<div className="w-px h-12 bg-[#5EC09F] opacity-50"></div>
						<div className="flex-1 flex gap-[6px] flex-col items-center">
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