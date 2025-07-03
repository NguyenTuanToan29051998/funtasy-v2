import bannerVideo from '../../assets/images/bg-banner.mp4';
import Logo from '../../assets/images/logo.gif';

const BannerSession = () => {

	return (
		<div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
			<video
				className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
				src={bannerVideo}
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
					<button className="font-ppNeueMontrealMedium w-[121px] h-[37px] rounded-[24px] bg-[#CEF17B] !text-[#101010] font-medium flex items-center justify-center hover:opacity-90 transition">
						Start trading
					</button>
					<button className="font-ppNeueMontrealMedium w-[155px] h-[39px] py-[10px] gap-[10px] rounded-full border border-[#CEF17B] flex items-center justify-center !text-[#CEF17B] text-base font-medium">
						Create Tokens
					</button>
				</div>
			</div>
		</div>
	);
};

export default BannerSession;