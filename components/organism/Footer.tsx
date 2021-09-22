import React from 'react';
import {
	DiscordFilled,
	GithubFilled,
	MediumFilled,
	RedditFilled,
	TwitterFilled,
} from '../atom/Icon';

const Footer = React.forwardRef<HTMLElement>((_, ref) => {
	return (
		<footer ref={ref}>
			<div className='px-5 mb-5'>
				<div className='flex border-t border-opacity-30 border-white pt-7'>
					<div className='flex-1 space-x-6'>
						<a href='#'>
							<TwitterFilled />
						</a>
						<a href='#'>
							<DiscordFilled />
						</a>
						<a href='#'>
							<GithubFilled />
						</a>
						<a href='#'>
							<MediumFilled />
						</a>
						<a href='#'>
							<RedditFilled />
						</a>
					</div>
					<div className='w-6'>
						<img
							className='w-full'
							src='/assets/optim-logo-footer.png'
							alt='optim logo footer'
						/>
					</div>
				</div>
				<div>
					<div className='font-extralight text-sm'>
						Copyright © <span className='font-mono'>2021</span> Optim. All
						rights reserved.
					</div>
				</div>
			</div>
			<div className='bg-footer-dots bg-center h-16'></div>
		</footer>
	);
});

export default Footer;
