import { ChevronRight } from '../atom/Icon';

const Subscription = () => {
return (

<div>
<div className='optim-container py-10'>
<div className='grid grid-cols-3 gap-8'>
<div className='col-span-2 md:col-span-3 p-20 md:py-10 md:px-5 bg-subscription-colorful bg-cover bg-center bg-no-repeat rounded-2xl'>
<div className='mb-4 bg-clip-text text-transparent bg-gradient-to-tl	from-[#e886b9] to-[#337fff] font-medium leading-tight text-[40px] md:text-[30px]'>
Notify me when
<br />
Optim is out!
</div>
<div className='py-3 px-5 bg-white flex rounded-sm w-4/6'>
<input
								placeholder='Enter your email'
								type='text'
								className='flex-1 mr-4 bg-transparent focus-visible:outline-none text-[#131415]'
							/>
<div className='md:text-center'>
<span className='bg-clip-text text-transparent bg-gradient-to-tl	from-[#e886b9] to-[#337fff]'>
Get notified
<span className='ml-1'>
<ChevronRight size={16} />
</span>
</span>
</div>
</div>
</div>
<div className='col-span-1 md:hidden'>
<div className='py-16 bg-[#131415] border border-white border-opacity-10 rounded-2xl overflow-hidden'>
<video
								className='mx-auto mb-5'
								width='160'
								height='160'
								autoPlay
								muted
								loop
							>
<source
									src='/assets/optim_rotate.mp4'
									type='video/mp4'
								/>
</video>
<div className='uppercase bg-gradient-to-tl	from-[#e3bef1] to-[#2a72eb] text-2xl tracking-[4px] text-center bg-clip-text text-transparent'>
DEFI Superpower
</div>
</div>
</div>
</div>
</div>
</div>
);
};

export default Subscription;
