import { TwitterBlackIcon } from '../../assets/icons';
import LogoBlack from '../../assets/images/logo-black.gif';

const Footer = () => {
	
	return (
		<footer className="bg-[#E2FFBE] h-[259px] px-[22px] xl:px-0 flex flex-col justify-end">
			<div className='relative max-w-[1341px] w-full h-[259px] mx-auto'>
				<div className='mt-[55px] md:mt-0 md:absolute top-[82px] right-5 flex gap-6 items-center justify-center'>
					<a
						href="https://x.com/thefuntasy"
						target="_blank"
						rel="noopener noreferrer"
						className='hover:opacity-80 transition'
					>
						<TwitterBlackIcon />
					</a>
					{/* <a
						href="https://t.me"
						target="_blank"
						rel="noopener noreferrer"
						className='hover:opacity-80 transition'
					>
						<TelegramBlackIcon />
					</a> */}
				</div>
				<div className='flex md:hidden items-center justify-center hover:cursor-pointer' onClick={() => window.location.href = '/'}>
					<img src={LogoBlack} alt="Logo" className="w-[87px] h-[87px]" />
				</div>
			</div>
			<div className="mb-[38px] lg:mb-[68px] w-full max-w-[1341px] mx-auto flex justify-between items-start md:items-center text-[031A16] text-base leading-[100%] tracking-[0]">
				<div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-end h-full">
					<span>2025</span>
					<a href="#" className="hover:underline ml-3.5 ml:mr-0">Terms & Conditions</a>
				</div>
				<div className="hidden md:flex items-center justify-center h-full hover:cursor-pointer" onClick={() => window.location.href = '/'}>
					<img src={LogoBlack} alt="Logo" className="w-[87px] h-[87px]" />
				</div>
				<div className="flex flex-col md:flex-row gap-6 items-end md:items-center justify-end h-full">
					<a href="#" className="hover:underline">Terms of service</a>
					<a href="#" className="hover:underline mr-3.5 md:mr-0">Privacy Policy</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
