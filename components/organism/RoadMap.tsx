import React from 'react';
import TimeLine from '../molecule/TimeLine';
import { isMobileDevice } from 'utils';

const RoadMap = React.forwardRef<HTMLElement>((_, ref) => {
  const isMobile = isMobileDevice();

  return (
    <section ref={ref} className='mb-14'>
      <div className='px-5 md:px-0 mb-4'>
        <div className='md:container'>
          <div className='text-sm font-medium tracking-[6px] uppercase mb-2 gradient-text bg-gradient-to-r from-[#80acfd] to-[#e0bdf1]'>
            Roadmap
          </div>
          <h2 className='text-[#d8d8d8] text-[40px] mb-8 md:text-[50px]'>
            Explore our roadmap
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-y-7 md:gap-y-10 md:gap-x-14'>
            {roadMapData.map((roadMap, index) => (
              <TimeLine
                key={index}
                month={roadMap.month}
                year={roadMap.year}
                content={roadMap.content}
              />
            ))}
          </div>
        </div>
      </div>
      {isMobile ? (
        <img src='/assets/grid.svg' width='414' height='98' alt='optim grid' />
      ) : (
        <video src='/assets/optim_grid.mp4' autoPlay loop muted width='100%' />
      )}
    </section>
  );
});

export default RoadMap;

const roadMapData = [
  {
    month: 'October',
    year: 2021,
    content: (
      <>
        <span className='block'>
          Release Gitbook Documentation / Whitepaper
        </span>
        <span className='md:mt-2 block'>Complete Technical Specifications</span>
        <span className='md:mt-2 block'>
          Begin development of backend smart contracts
        </span>
      </>
    ),
  },
  {
    month: 'November',
    year: 2021,
    content: <span className='block'>Frontend and Backend Development</span>,
  },
  {
    month: 'December',
    year: 2021,
    content: (
      <>
        <span className='block'>Announce Partnerships + Integrations</span>
        <span className='md:mt-2 block'>Prepare for Testnet Launch</span>
      </>
    ),
  },
  {
    month: 'January',
    year: 2022,
    content: (
      <>
        <span className='block'>Launch Testnet</span>
        <span className='md:mt-2 block'>Enter Audit</span>
      </>
    ),
  },
  {
    month: 'February',
    year: 2022,
    content: <span className='block'>Launch Optim V1</span>,
  },
  {
    month: 'April-July',
    year: 2022,
    content: (
      <>
        <span className='block'>
          Develop Optim V2 (Leveraged Yield Farming + Auto Balancing Vaults)
        </span>
        <span className='md:mt-2 block'>Testnet + Audit Optim V2</span>
      </>
    ),
  },
  {
    month: 'August',
    year: 2022,
    content: (
      <span className='block'>
        Launch Optim V2 (Leveraged Yield Farming + Auto Balancing Vaults)
      </span>
    ),
  },
];
