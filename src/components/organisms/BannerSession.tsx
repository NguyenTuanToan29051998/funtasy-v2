import Logo from '../../assets/images/logo.gif';

const BannerSession = () => {

	return (
		<div className="relative h-screen w-full flex items-center justify-center overflow-hidden z-10">
			<video
				className="absolute top-0 left-0 w-full h-full object-cover z-[-1] object-left lg:object-cover"
				src={'https://game.cattos.io/bg-funtasy.mp4'}
				autoPlay
				loop
				muted
				playsInline
			/>
			<div className="flex flex-col items-center justify-center text-center mx-11 lg:mx-0">
				<img
					src={Logo}
					alt="logo"
					className="w-[87px] h-[87px]"
				/>
				<h2
					className="mt-6 mb-11 lg:my-6 font-ppNeueMontrealMedium font-medium text-2xl lg:text-[48px] leading-[1.2] tracking-[0%] text-center bg-gradient-to-r from-[#DDEE2B] to-[#FFFFE9] bg-clip-text text-transparent whitespace-pre-line"
				>
					{`Innovative token launch platform with
              AI-powered social-fi engine`}
				</h2>
				<p
					className="font-normal text-base leading-[1.2] text-center text-[#CEEDB2] max-w-[493px]"
				>
					A new standard for token trading — where AI-powered scoring of social reputation, community trust, and on-chain performance come together to launch what truly matters (and <span className="italic">fun</span>).
				</p>
				<div className="mt-[52px] lg:mt-6 flex gap-6">
					<div className='relative group inline-block w-full lg:w-auto'>
						<button className="font-ppNeueMontrealMedium w-[155px] h-[37px] rounded-[24px] bg-[#CEF17B] !text-[#101010] font-medium flex items-center justify-center hover:opacity-85 transition">
							Start trading
						</button>
						<div className='absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-base rounded px-3 py-1 whitespace-nowrap z-10 font-ppNeueMontreal left-1/2 transform -translate-x-1/2'>
							Coming soon
							<div className='absolute -bottom-[4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45'></div>
						</div>
					</div>
					<div className='relative group inline-block w-full lg:w-auto'>
						<button className="font-ppNeueMontrealMedium w-[155px] h-[39px] py-[10px] gap-[10px] rounded-full border border-[#CEF17B] flex items-center justify-center !text-[#CEF17B] text-base font-medium hover:opacity-85">
							Create Tokens
						</button>
						<div className='absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-base rounded px-3 py-1 whitespace-nowrap z-10 font-ppNeueMontreal left-1/2 transform -translate-x-1/2'>
							Coming soon
							<div className='absolute -bottom-[4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerSession;