import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useResizeScreen from '../../hooks/resize-screen';
import { cn } from '../../utils';

import { useNavigate } from 'react-router-dom';
import { FuntasyIcon, MenuIcon } from '../../assets/icons';

const Header = ({ className }: { className?: string }) => {
  const { widthScreen } = useResizeScreen();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isMobile = widthScreen <= 1024;

  const [showLoyaltyTooltip, setShowLoyaltyTooltip] = useState(false);

  const toggleMenu = () => setIsOpenMenu(prev => !prev);
  const closeMenu = () => setIsOpenMenu(false);

  const menuItems = [
  { label: 'Docs', route: '/leaderboard' },
  { label: 'Earn Points', route: '/mindshare' },
  { label: 'Social', route: '/loyalty' },
];


  return (
    <>
      <div
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-[height] duration-500 max-w-[1247px] mx-auto',
          'bg-gradient-to-t from-[#231B1500] to-transparent backdrop-blur-sm',
          'flex justify-between items-start lg:px-0 px-4',
          isOpenMenu ? 'h-screen px-8 py-8 !bg-[#FFFAE9]' : 'h-[4.5rem] lg:h-[55px] !bg-black lg:!bg-transparent items-center',
          className,
        )}
      >
        <button onClick={() => navigate('/')} className="flex items-center gap-3">
          <FuntasyIcon />
          <p className='text-[#DDEE2B] font-normal text-[20px] tracking-[0%] text-center !mb-0'><span className='italic'>Fun</span>tasy</p>
        </button>

        <div className='hidden lg:flex items-center gap-6 text-white pointer-events-auto h-full justify-center'>
          {menuItems.map(({ label, route }, index) => {
            const isActive = location.pathname === route;
            const isLoyalty = label === 'Loyalty';

            return (
              <div key={route} className="flex items-center gap-6 h-full relative">
                <Link
                  to={isLoyalty ? '#' : route}
                  className={`text-sm uppercase h-full content-center px-4  ${isActive
                    ? 'text-[#FFCD1F] bg-[#FFCD1F1A] border-b-[2px]'
                    : 'text-white hover:text-[var(--primary)] border-none'
                    }`}
                  onMouseEnter={() => isLoyalty && setShowLoyaltyTooltip(true)}
                  onMouseLeave={() => isLoyalty && setShowLoyaltyTooltip(false)}
                  tabIndex={isLoyalty ? -1 : 0}
                >
                  {label}
                </Link>
                {/* Tooltip cho Loyalty */}
                {isLoyalty && showLoyaltyTooltip && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-black text-white text-xs rounded shadow z-50 whitespace-nowrap">
                    Coming soon
                  </div>
                )}

                {index < menuItems.length - 1 && (
                  <div className="w-[5px] h-[5px] bg-[#D9D9D978]"></div>
                )}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className='lg:hidden pointer-events-auto'
          onClick={toggleMenu}
        >
          <MenuIcon fill={isMobile && !isOpenMenu ? 'white' : 'black'} />
        </button>

        {isOpenMenu && (
          <motion.div
            className='absolute top-[var(--header-height)] w-full flex flex-col gap-7 pt-10 items-start text-2xl text-white pointer-events-auto'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {menuItems.map(({ label, route }) => (
              <Link
                key={route}
                to={route}
                onClick={closeMenu}
                className='uppercase hover:text-[var(--primary)] transition-all duration-300 font-normal text-base text-[#2F2F2F] font-ppNeueMontreal'
              >
                {label.toLowerCase()}
              </Link>
            ))}
            
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Header;
