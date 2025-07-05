import axios from 'axios';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { PointsApiManagement } from '../../api-clients/fpoit';
import apiRequest from '../../api-clients/user';
import FuntasyChart from '../../assets/images/funtasy-chart.png';
import LayoutGrid from '../../assets/images/layout-grid.gif';
import LineChart from '../../assets/images/line-chart.gif';
import Ring1 from '../../assets/images/ring-1.png';
import Ring2 from '../../assets/images/ring-2.png';
import ScaleIcon from '../../assets/images/scale-icon.gif';
import Sparkles from '../../assets/images/sparkles-icon.gif';
import { getShortNumber, getUnitSuffix } from '../../helpers';

const FlagshipSection = () => {
	const [totalUsers, setTotalUsers] = useState<number>();
	const [totalFPoints, setTotalFPoints] = useState<number>();
	const [totalWallets, setTotalWallets] = useState<number>();
	const [totalTransactions, setTotalTransactions] = useState<number>();

	useEffect(() => {
		async function fetchAllData() {
			try {
				const [txnRes, walletRes] = await Promise.all([
					axios.get("https://api.dune.com/api/v1/query/5168753/results?api_key=chFRkSeoNDnXMQq0E2kZSpLnxZQ1aytn"),
					axios.get("https://api.dune.com/api/v1/query/5169067/results?api_key=chFRkSeoNDnXMQq0E2kZSpLnxZQ1aytn")
				]);
				setTotalTransactions(txnRes.data.result?.rows[0]._col0);
				setTotalWallets(walletRes.data.result.rows[0].total_wallets);
			} catch (err) {
				console.error('Error fetching txn or wallet count:', err);
			}

			try {
				const pointsRes = await PointsApiManagement.getTotolPoint();
				setTotalFPoints(pointsRes.data.data.point / 1e3);
			} catch (err) {
				console.error('Error fetching points:', err);
			}

			try {
				const resLogin = await apiRequest('/user/totaluser.public', {});
				setTotalUsers(resLogin.count);
			} catch (error) {
				console.error('Error fetching total users:', error);
			}
		}

		fetchAllData();
	}, []);

	return (
		<div className="bg-[#E0FFC4] h-auto w-full relative pt-[75px] lg:pt-[137px] overflow-hidden">
			<img
				src={Ring1}
				alt="ring"
				className="absolute left-1/2 top-1/2 min-w-[1077px] h-[1077px] min-h-[1077px] object-cover object-left -translate-x-1/2 -translate-y-1/2 animate-spin-alternate pointer-events-none"
			/>
			<img
				src={Ring2}
				alt="ring"
				className="absolute left-1/2 top-1/2 min-w-[787px] h-[787px] min-h-[787px] object-cover object-left -translate-x-1/2 -translate-y-1/2 animate-spin-alternate pointer-events-none"
			/>
			<div className='relative z-10 flex flex-col items-center'>
				<div
					className="hidden md:flex font-ppNeueMontrealMedium text-black text-[32px] font-light"
				>
					Meet the <span className='text-[#084734]'>&nbsp;f l a g s h i p&nbsp;&nbsp;p l a t f o r m&nbsp;</span>on Aptos
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
				<div className="mb-[75px] lg:mb-[55px] w-full max-w-[306px] md:max-w-[1002px] rounded-xl py-[22px] border border-[#5EC09F] lg:mx-auto grid grid-cols-2 gap-y-4 md:flex md:h-[99px]">
					<div className="flex gap-[6px] w-full flex-col items-center py-2">
						<span className="text-[15px] font-normal leading-[100%] text-center text-[#186B4F]">Total Users</span>
						<div className='flex items-center text-[26px] font-medium leading-[100%] text-center text-[#1E1E1E] font-ppNeueMontrealMedium'>
							<CountUp
								start={0}
								end={parseFloat(getShortNumber(totalUsers || 0))}
								delay={0.5}
								decimals={2}
								decimal='.'
								className=''
							/>
							<p className=''>{getUnitSuffix(totalUsers || 0)}</p>
						</div>
					</div>
					<div className="hidden md:block w-[1px] h-12 bg-[#5EC09F] opacity-50"></div>
					<div className="flex gap-[6px] w-full flex-col items-center py-2">
						<span className="text-[15px] font-normal leading-[100%] text-center text-[#186B4F]">Total F Points</span>
						<div className='flex items-center text-[26px] font-medium leading-[100%] text-center text-[#1E1E1E] font-ppNeueMontrealMedium'>
							<CountUp
								start={0}
								end={parseFloat(getShortNumber(totalFPoints || 0))}
								delay={0.5}
								decimals={2}
								decimal='.'
								className=''
							/>
							<p className=''>{getUnitSuffix(totalFPoints || 0)}</p>
						</div>
					</div>
					<div className="hidden md:block w-[1px] h-12 bg-[#5EC09F] opacity-50"></div>
					<div className="flex gap-[6px] w-full flex-col items-center py-2">
						<span className="text-[15px] font-normal leading-[100%] text-center text-[#186B4F]">Total Unique Wallets</span>
						<div className='flex items-center text-[26px] font-medium leading-[100%] text-center text-[#1E1E1E] font-ppNeueMontrealMedium'>
							<CountUp
								start={0}
								end={parseFloat(getShortNumber(totalWallets || 0))}
								delay={0.5}
								decimals={2}
								decimal='.'
								className=''
							/>
							<p className=''>{getUnitSuffix(totalWallets || 0)}</p>
						</div>
					</div>
					<div className="hidden md:block w-[1px] h-12 bg-[#5EC09F] opacity-50"></div>
					<div className="flex gap-[6px] w-full flex-col items-center py-2">
						<span className="text-[15px] font-normal leading-[100%] text-center text-[#186B4F]">Total Transactions</span>
						<div className='flex items-center text-[26px] font-medium leading-[100%] text-center text-[#1E1E1E] font-ppNeueMontrealMedium'>
							<CountUp
								start={0}
								end={parseFloat(getShortNumber(totalTransactions || 0))}
								delay={0.5}
								decimals={2}
								decimal='.'
								className=''
							/>
							<p className=''>{getUnitSuffix(totalTransactions || 0)}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlagshipSection;