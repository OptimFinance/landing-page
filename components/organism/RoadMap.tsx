import React from 'react';
import TimeLine from '../molecule/TimeLine';

const RoadMap = React.forwardRef<HTMLElement>((_, ref) => {
	return (
		<section ref={ref} className='mb-14'>
			<div className='px-5'>
				<div className='text-sm font-medium tracking-[6px] uppercase mb-2 gradient-text bg-gradient-to-r from-[#80acfd] to-[#e0bdf1]'>
					Roadmap
				</div>
				<h2 className='text-[#d8d8d8] text-[40px] mb-8'>
					Explore our roadmap
				</h2>
				{roadMapData.map((roadMap, index) => (
					<TimeLine
						key={index}
						month={roadMap.month}
						year={roadMap.year}
						content={roadMap.content}
					/>
				))}
			</div>
			<img src='/assets/grid.svg' width="414" height="98" alt='optim grid' />
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
				Release Gitbook Documentation/Whitepaper
				<br />
				Complete Technical Specifications
				<br />
				Begin development of backend smart contracts
			</>
		),
	},
	{
		month: 'November',
		year: 2021,
		content: <>Frontend and Backend Development</>,
	},
	{
		month: 'December',
		year: 2021,
		content: (
			<>
				Announce Partnerships + Integrations
				<br />
				Prepare for Testnet Launch
			</>
		),
	},
	{
		month: 'January',
		year: 2022,
		content: (
			<>
				Launch Testnet
				<br />
				Enter Audit
			</>
		),
	},
	{
		month: 'February',
		year: 2022,
		content: <>Launch Optim V1</>,
	},
	{
		month: 'April-July',
		year: 2022,
		content: (
			<>
				Develop Optim V2 (Leveraged Yield Farming + Auto Balancing Vaults)
				<br />
				Testnet + Audit Optim V2
			</>
		),
	},
	{
		month: 'August',
		year: 2022,
		content: (
			<>Launch Optim V2 (Leveraged Yield Farming + Auto Balancing Vaults)</>
		),
	},
];
