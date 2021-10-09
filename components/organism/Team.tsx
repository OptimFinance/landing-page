import React from 'react';
import Tag from '../atom/Tag';

const Team = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className='px-5 mb-14 md:px-0'>
      <div className='md:container'>
        <div className='text-sm font-medium tracking-[6px] uppercase mb-2 gradient-text bg-gradient-to-r from-[#80acfd] to-[#e0bdf1]'>
          The team
        </div>
        <h2 className='text-[#d8d8d8] text-[40px] mb-8 md:text-[50px] md:mb-10'>
          Made by innovators
        </h2>
        <Tag text='Coming soon' className='mb-5 md:mb-8' />
        <div className='mb-4 gradient-text text-2xl from-[#e3bef1] to-[#2a72eb] md:text-4xl md:mb-6'>
          A top-tier team with experience building on Cardano + DeFi on other
          chains
        </div>
        <div className='mb-8 text-sm text-[#d8d8d8] tracking-[5px] font-light uppercase md:text-lg md:mb-14'>
          Alumni from: MLabs | IOHK | <br />
          Celo | Algorand | MIT | Harvard | Cambridge
        </div>
        <div className='flex flex-wrap'>
          <div className='w-1/3 mb-6 h-[24px] md:h-[50px] md:mb-8 lg:w-1/4'>
            <img
              className='h-full w-min'
              src='/assets/iohk-logo.svg'
              alt='iohk'
            />
          </div>
          <div className='w-1/3 mb-6 h-[24px] md:h-[50px] md:mb-8 lg:w-1/4 text-center'>
            <img
              className='h-full w-min mx-auto'
              src='/assets/mlabs-logo.svg'
              alt='mlabs'
            />
          </div>
          <div className='w-1/3 mb-6 h-[24px] md:h-[50px] md:mb-8 lg:w-1/4 text-right '>
            <img
              className='h-full w-min ml-auto lg:mx-auto'
              src='/assets/celo-logo.svg'
              alt='celo'
            />
          </div>
          <div className='w-1/3 mb-6 h-[24px] md:h-[50px] md:mb-8 lg:w-1/4 '>
            <img
              className='h-full w-min lg:ml-auto'
              src='/assets/algorand-logo.svg'
              alt='algorand'
            />
          </div>
          <div className='w-1/3 mb-6 h-[24px] md:h-[50px] md:mb-8 lg:w-1/4 text-center'>
            <img
              className='h-full w-min mx-auto lg:mr-auto lg:ml-0'
              src='/assets/mit-logo.svg'
              alt='mit'
            />
          </div>
          <div className='w-1/3 mb-6 h-[24px] md:h-[50px] md:mb-8 lg:w-1/4 text-right '>
            <img
              className='h-full w-min ml-auto lg:mx-auto'
              src='/assets/harvard-logo.svg'
              alt='harvard'
            />
          </div>
          <div className='w-1/3 mb-6 h-[24px] md:h-[50px] md:mb-8 lg:w-1/4 '>
            <img
              className='h-full w-min lg:mx-auto'
              src='/assets/cambridge.svg'
              alt='cambridge'
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Team;
