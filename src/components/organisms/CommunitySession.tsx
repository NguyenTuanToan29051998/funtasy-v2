import Community from '../../assets/images/community.gif';
import BgAptos from '../../assets/images/bg-aptos.png';

const CommunitySession = () => {

	return (
		<>
			<div className="relative h-[900px] w-full flex flex-col items-center overflow-hidden lg:pt-[303px]">
				<img
					className="absolute top-0 left-0 w-full h-full object-cover z-[-1] bg-[#061C15]"
					src={Community}
				/>
				<p className="text-[#FFFFFF91] text-base font-normal leading-5 tracking-normal text-center">Forget the investors</p>
				<h2 className="text-white font-ppNeueMontrealMedium mt-[6px] mb-[26px] text-[32px] text-center leading-[100%] tracking-normal">
					This is <span className="text-white">community-first</span>,<br className="hidden md:block" /> always.
				</h2>
				<div className="flex justify-center items-center gap-4 flex-wrap">
					<button className="font-ppNeueMontrealMedium bg-[#CEF17B] text-black text-base px-4 py-2 rounded-full hover:opacity-90 transition">
						Start trading
					</button>
					<button className="font-ppNeueMontrealMedium bg-[#CEF17B] text-black text-base px-4 py-2 rounded-full hover:opacity-90 transition">
						Create tokens
					</button>
					<button className="font-ppNeueMontrealMedium bg-[#CEF17B] text-black text-base px-4 py-2 rounded-full hover:opacity-90 transition">
						Earn points
					</button>
				</div>
				<div className="pt-12 flex flex-col items-center gap-6 mt-[95px] bg-[#E0FFC4] text-black w-[869px] h-[227px] rounded-3xl">
					<p className="font-ppNeueMontrealMedium text-lg lg:text-2xl font-medium leading-snug max-w-[614px] text-center">
						Anyone can create, trade, and help shape <span className="italic">Funtasy</span> platform.
						Reputation, community trust, and fair launches power the entire engine.
					</p>
					<p className="text-base text-black h-10">
						<span className='italic'>Be a future owner of</span> $FUN!
					</p>
				</div>
			</div>
			<div className="relative h-[450px] bg-[#061C15]">
				<div
					className="absolute w-[855px] h-[201px] top-[125px] left-[293px] bg-no-repeat bg-cover opacity-8 z-0"
					style={{ backgroundImage: `url(${BgAptos})` }}
				/>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
					<p className="text-4xl leading-[48px] tracking-[0] text-white text-center">
						Backed by <span className="text-[#CEF17B]">Aptos Foundation</span>
					</p>
					<p className="mt-3 text-[18px] leading-[1] font-normal text-center text-white/65 max-w-[610px]">
						Proudly supported by the Aptos Foundation, empowering global trading engine through secure, scalable infrastructure.
					</p>
				</div>
			</div>
		</>
	);
};

export default CommunitySession;