import Community from '../../assets/images/community.gif';
import CommunityMobile from '../../assets/images/community-mobile.png';
import BgAptos from '../../assets/images/bg-aptos.png';
import useResizeScreen from '../../hooks/resize-screen';
import { Button } from '../atoms/modals/button';

const CommunitySession = () => {

	const { widthScreen } = useResizeScreen();

	const isMobile = widthScreen <= 1024;

	return (
		<>
			<div className="relative h-[900px] w-full flex flex-col items-center overflow-hidden pt-[268px] lg:pt-[303px] bg-[#061C15]">
				<img
					className="absolute top-[125px] lg:top-0 left-0 w-full object-cover object-center z-1 h-[584px] lg:h-full"
					src={isMobile ? CommunityMobile : Community}
					alt="Community"
				/>
				<div className='relative z-10 flex flex-col items-center'>
					<p className="text-[#FFFFFF91] text-base font-normal leading-5 tracking-normal text-center">Forget the investors</p>
					<h2 className="text-white font-ppNeueMontrealMedium mt-[6px] mb-[26px] text-2xl lg:text-[32px] text-center leading-[100%] tracking-normal">
						This is <span className="text-white">community-first</span>,<br className="hidden md:block" /> always.
					</h2>
					<div className="flex justify-center items-center gap-4 flex-wrap">
						<div className='relative group inline-block w-auto'>
							<Button>Start trading</Button>
							<div className='absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-base rounded px-3 py-1 whitespace-nowrap z-10 font-ppNeueMontreal left-1/2 transform -translate-x-1/2'>
								Coming soon
								<div className='absolute -bottom-[4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45'></div>
							</div>
						</div>
						<div className='relative group inline-block w-auto'>
							<Button>Create tokens</Button>
							<div className='absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-base rounded px-3 py-1 whitespace-nowrap z-10 font-ppNeueMontreal left-1/2 transform -translate-x-1/2'>
								Coming soon
								<div className='absolute -bottom-[4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45'></div>
							</div>
						</div>
						<a
							href="https://cattos.io/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button>Earn points</Button>
						</a>
					</div>
					<div className="pt-[38px] lg:pt-12 flex flex-col items-center gap-3 lg:gap-6 mt-[138px] lg:mt-[95px] bg-[#E0FFC4] text-black w-[289px] lg:w-[869px] h-[227px] rounded-3xl">
						<p className="font-ppNeueMontrealMedium leading-[1.5] text-base lg:text-2xl font-medium lg:leading-snug max-w-[221px] lg:max-w-[614px] text-center">
							Anyone can create, trade, and help shape <span className="italic"><div className='lg:block hidden'></div>Funtasy</span> platform.
							Reputation, community trust, and fair launches power the entire engine.
						</p>
						<p className="tex-[13px] lg:text-base text-black h-9 lg:h-10">
							<span className='italic'>Be a future owner of</span> $FUN!
						</p>
					</div>
				</div>
				<div
				className="absolute w-full h-[141px] bottom-0 opacity-100 z-10"
				style={{
					background: 'linear-gradient(180deg, rgba(6, 28, 21, 0) 0%, #061C15 100%)'
				}}
			/>
			</div>
			<div className="relative h-[298px] lg:h-[450px] bg-[#061C15]">
				<div
					className="absolute w-[314px] h-[74px] lg:w-[855px] lg:h-[201px] top-[33px] lg:top-[125px] left-1/2 -translate-x-1/2 bg-no-repeat bg-cover opacity-8 z-0"
					style={{ backgroundImage: `url(${BgAptos})` }}
				/>
				<div className="mt-8 lg:mt-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[294px] lg:w-auto">
					<p className="text-xl leading-[17px] lg:text-4xl lg:leading-12 tracking-[0] text-white text-center">
						Backed by <span className="text-[#CEF17B]">Aptos Foundation</span>
					</p>
					<p className="mt-3 text-base lg:text-[18px] leading-[1] font-normal text-center text-[#FFFFFF91] max-w-[610px]">
						Proudly supported by the Aptos Foundation, empowering global trading engine through secure, scalable infrastructure.
					</p>
				</div>
			</div>

		</>
	);
};

export default CommunitySession;