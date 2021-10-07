import FollowUs from './FollowUs';
import { isMobileDevice } from 'utils';

const Header = () => {
  const isMobile = isMobileDevice();
  return (
    <header className='mb-14 mt-10 px-5 md:px-0 md:mb-24'>
      <div className='md:container md:grid md:grid-cols-2'>
        <div className=''>
          <h1 className='gradient-text text-[50px] leading-[60px] font-light mb-3 md:text-6xl md:mb-8 lg:text-7xl'>
            Cardano’s Yield Aggregator
          </h1>
          <div className='text-base font-light mb-5 md:text-lg'>
            Optim Finance is a suite of products designed to optimize yield
            generation in the Cardano DeFi ecosystem. Easy, automated, secure
            asset management.
          </div>
          <FollowUs />
        </div>
        {!isMobile && (
          <div className='hidden md:block relative'>
            <video
              src='/assets/optim_main.mp4'
              autoPlay
              loop
              muted
              className='absolute h-[200%] z-[-1] max-w-none transform translate-x-2/4 -translate-y-2/4 top-2/4 right-0 lg:h-[220%] lg:right-1/4'
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

// Email Input

{
  /* <div className='bg-optim-dark rounded-sm mb-2'>
	<input id="optim-email-input" type='text' placeholder='Enter your email'
		className='h-12 px-5 text-white text-opacity-60 w-full bg-transparent focus-within:outline-none focus:border' />
</div>
<button className='bg-white text-black w-full border-none rounded-sm py-3 font-medium active:relative active:top-[1px]'>
	Get notified
</button> */
}
