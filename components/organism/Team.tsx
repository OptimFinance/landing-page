import React from 'react';
import Logo from '../atom/Logo';
import Tag from '../atom/Tag';

const Team = React.forwardRef<HTMLElement>((_, ref) => {
	return (
		<section ref={ref} className='px-5 mb-14'>
			<div className='text-sm font-medium tracking-[6px] uppercase mb-2 gradient-text bg-gradient-to-r from-[#80acfd] to-[#e0bdf1]'>
				The team
			</div>
			<div className='text-[#d8d8d8] text-[40px] mb-8'>Made by innovators</div>
			<Tag text='Comming soon' className='mb-5' />
			<div className='mb-4 gradient-text text-2xl from-[#e3bef1] to-[#2a72eb]'>
				A top-tier team with experience building on Cardano + DeFi on other
				chains
			</div>
			<div className='mb-8 text-sm text-[#d8d8d8] tracking-[5px] font-light uppercase'>
				Alumni from: MLabs | IOHK | <br />
				Celo | Algorand | MIT | Harvard | Cambridge
			</div>
			<div className='grid grid-cols-3 grid-rows-3 gap-6'>
				<Logo name='iohk' className='' />
				<Logo name='mlabs' className='text-center' />
				<Logo name='celo' className='text-right' />
				<Logo name='algorand' className='' />
				<Logo name='mit' className='text-center' />
				<Logo name='harvard' className=' text-right' />
				<Logo name='cambridge' className='' />
			</div>
		</section>
	);
});

export default Team;
