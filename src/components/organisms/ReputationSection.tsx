import Pyramid from '../../assets/images/pyramid-icon.gif';
import DonutChart from '../../assets/images/donut-chart.gif';

const ReputationSection = () => {

  return (
    <div className="relative bg-[#084734] text-white h-[1243px] lg:h-[900px] pt-20 lg:pt-[135px]">
      <h2 className="font-ppNeueMontrealMedium text-center text-2xl lg:text-[32px] text-white mb-[58px] lg:mb-[42px] max-w-[240px] lg:max-w-max mx-auto">
        The <span className="text-[#DCEE48]"><span className='italic mr-[1px]'>Fun</span>tasy</span> reputation-driven social-fi
      </h2>
      <div className="px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 mx-auto max-w-[1096px] max-h-[517px]">
        <div className="border border-[#E8FFA766] rounded-3xl flex flex-col items-center h-[380px] lg:h-[517px]">
          <div className="text-base lg:text-xl text-white p-6">
            We merge <span className="text-[#DFEC2A]">on-chain activity</span> and <span className="text-[#DFEC2A]">social data</span> <span className='mr-2'>with AI to generate</span>
            <span className="inline-flex items-center gap-1 bg-[#E9FFAD] text-black text-base rounded-xl w-[155px] h-[21px] align-middle justify-center">
              <span className="-mt-[2px]">user trust scores</span>
              <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8.00001 6.66659C9.47277 6.66659 10.6667 5.47268 10.6667 3.99992C10.6667 2.52716 9.47277 1.33325 8.00001 1.33325C6.52725 1.33325 5.33334 2.52716 5.33334 3.99992C5.33334 5.47268 6.52725 6.66659 8.00001 6.66659Z" fill="black" />
                  <path d="M13.3333 11.6667C13.3333 13.3234 13.3333 14.6667 7.99999 14.6667C2.66666 14.6667 2.66666 13.3234 2.66666 11.6667C2.66666 10.0101 5.05466 8.66675 7.99999 8.66675C10.9453 8.66675 13.3333 10.0101 13.3333 11.6667Z" fill="black" />
                </svg>
              </span>
            </span>
          </div>
          <img
            src={Pyramid}
            alt="Pyramid"
            className="w-[320px] lg:w-auto h-auto"
          />
        </div>
        <div className="border border-[#E8FFA766] rounded-3xl flex flex-col items-center h-[446px] lg:h-[517px]">
          <p className="text-base lg:text-xl text-white p-6">
            Your <span className="text-[#DFEC2A]">reputation</span>. Your <span className="text-[#DFEC2A]">engagement</span>. Your <span className="text-[#DFEC2A]">rewards</span>.<br />
            Earn points and unlock real value for everything you do.
          </p>
          <img
            src={DonutChart}
            alt="Ring system"
            className="w-[300px] lg:w-[420px] h-auto rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ReputationSection;