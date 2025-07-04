import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import useResizeScreen from '../../hooks/resize-screen';
import { cn } from '../../utils';
import useOutsideClick from '../../hooks/outside-click';

import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon, FuntasyIcon, MenuIcon, TelegramIcon, TwitterIcon } from '../../assets/icons';

const Header = ({ className }: { className?: string }) => {
  const { widthScreen } = useResizeScreen();
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isMobile = widthScreen <= 1024;
  const [open, setOpen] = useState(false);

  const dropdownRef = useOutsideClick(() => setOpen(false));

  const toggleMenu = () => setIsOpenMenu(prev => !prev);
  const closeMenu = () => setIsOpenMenu(false);

  return (
    <>
      <div
        className={cn(
          'fixed z-50 transition-[height] duration-500 bg-white px-3 w-[327px] h-[55px] items-center left-1/2 -translate-x-1/2 right-1/2 top-6 rounded-3xl lg:left-0 lg:right-0 lg:translate-x-0 lg:w-full lg:rounded-none lg:top-0 lg:px-0',
          isOpenMenu ? '' : '',
          className,
        )}
      >
        <div className={
          cn(
          'max-w-[1280px] mx-auto flex justify-between items-center relative h-[55px]',
        )}>
          <button onClick={() => navigate('/')} className="flex items-center gap-3">
            <FuntasyIcon />
            <p className='text-black font-normal text-[20px] tracking-[0%] text-center !mb-0'><span className='italic'>Fun</span>tasy</p>
          </button>
          <div className='hidden lg:flex items-center gap-6 text-white pointer-events-auto h-full justify-center'>
            <div className="flex items-center gap-6 h-full relative">
              <div
                className={`font-ppNeueMontrealMedium text-base h-full content-center px-4 text-[#000000DB] border-none hover:cursor-pointer hover:underline`}
              >
                Docs
              </div>
              <div
                className={`font-ppNeueMontrealMedium text-base h-full content-center px-4 text-[#000000DB] border-none hover:cursor-pointer hover:underline`}
              >
                Earn Points
              </div>
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  className="font-ppNeueMontrealMedium bg-[#0000001A] text-[#000000DB] w-[100px] h-[31px] rounded-xl flex items-center justify-center gap-[10px] text-base hover:cursor-pointer hover:opacity-85 transition"
                >
                  Social
                  <ChevronDownIcon />
                </button>
                {open && (
                  <div
                    ref={dropdownRef}
                    className="absolute mt-2 w-52 bg-[#FFFFFF21] text-white rounded-xl z-10"
                  >
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-[13px] hover:bg-white/20 rounded-tl-xl rounded-tr-xl transition"
                    >
                      X/Twitter <TwitterIcon />
                    </a>
                    <a
                      href="https://t.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-[13px] hover:bg-white/20 rounded-bl-xl rounded-br-xl transition"
                    >
                      Telegram Channel <TelegramIcon />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button type="button" className='hidden lg:flex items-center justify-center w-[121px] h-[37px] rounded-3xl bg-[#CEF17B] text-black text-base hover:opacity-85'>
            Launch App
          </button>

          <button
            type="button"
            className='lg:hidden'
            onClick={toggleMenu}
          >
            <MenuIcon fill={'black'} />
          </button>
        </div>
      </div>

      {/* Menu mobile xổ xuống */}
      <AnimatePresence>
        {isOpenMenu && isMobile && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            <motion.div
              className="fixed px-3 top-[91px] left-1/2 -translate-x-1/2 w-[90vw] max-w-[327px] bg-white rounded-xl shadow-lg z-40 flex flex-col items-center"
              initial={{ opacity: 0, y: -30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.97 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-full flex flex-col">
                <div className="py-3 text-center font-ppNeueMontrealMedium text-base text-[#000000DB] border-b border-solid border-[#0000001F] leading-[19px]">Docs</div>
                <div className="py-3 text-center font-ppNeueMontrealMedium text-base text-[#000000DB] border-b border-solid border-[#0000001F] leading-[19px]">Earn Points</div>
                <div className="py-3 text-center font-ppNeueMontrealMedium text-base text-[#000000DB] border-b border-solid border-[#0000001F] leading-[19px]">X/Twitter</div>
                <div className="py-3 text-center font-ppNeueMontrealMedium text-base text-[#000000DB] leading-[19px]">Telegram Channel</div>
              </div>
              <button
                type="button"
                className="mb-3 w-full h-[44px] rounded-3xl bg-[#CEF17B] text-black text-base font-ppNeueMontrealMedium hover:opacity-85"
              >
                Launch App
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
