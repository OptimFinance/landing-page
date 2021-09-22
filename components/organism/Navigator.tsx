interface INavigatorProps {
	dispatchAnchor: (anchor: string) => void;
}

const Navigator = ({ dispatchAnchor }: INavigatorProps) => {
	return (
		<div className='relative'>
			<div className='p-5'>
				<img className='h-6 mx-auto' src='/assets/optim.png' alt='optim' />
				<label htmlFor='optim-nav-checkbox' className='absolute left-5 top-5'>
					<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
						<g
							stroke='#FFF'
							strokeLinecap='round'
							strokeLinejoin='round'
							fill='none'
							fillRule='evenodd'
						>
							<path d='M20.357 17.5H3.643M20.357 12.5H3.643M20.357 7.5H3.643' />
						</g>
					</svg>
				</label>
			</div>
			<input id='optim-nav-checkbox' className='hidden' type='checkbox' />
			{/* Overlay */}
			<label
				htmlFor='optim-nav-checkbox'
				className='optim-nav-overlay animate-fade-in hidden fixed bg-white bg-opacity-25 top-0 left-0 right-0 bottom-0'
			/>
			{/* Nagigation */}
			<nav className='optim-nav -translate-x-full fixed top-0 left-0 bottom-0 w-[320px] max-w-full bg-black bg-opacity-80 transition-transform'>
				<div className='p-5 border-b border-white border-opacity-10 bg-black relative'>
					<img className='h-6' src='/assets/optim.png' alt='optim' />
					<label
						htmlFor='optim-nav-checkbox'
						className='absolute right-5 top-5'
					>
						<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
							<g
								stroke='#FFF'
								strokeLinecap='round'
								strokeLinejoin='round'
								fill='none'
								fillRule='evenodd'
							>
								<path d='M20.357 17.5H3.643M20.357 12.5H3.643M20.357 7.5H3.643' />
							</g>
						</svg>
					</label>
				</div>
				<div className='p-5 '>
					<ul className='space-y-4'>
						{navItems.map((navItem) =>
							navItem.anchor ? (
								<li key={navItem.anchor}>
									<label
										htmlFor='optim-nav-checkbox'
										onClick={() => dispatchAnchor(navItem.anchor)}
									>
										{navItem.text}
									</label>
								</li>
							) : (
								<li key={1}>
									<span>
										{navItem.text}{' '}
										<span className='text-sm opacity-50 ml-2'>Coming soon</span>
									</span>
								</li>
							)
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navigator;

const navItems = [
	{
		text: 'Products',
		anchor: 'product',
	},
	{
		text: 'Roadmap',
		anchor: 'roadmap',
	},
	{
		text: 'Team',
		anchor: 'team',
	},
	{
		text: 'Docs',
		anchor: '',
	},
	{
		text: 'Socials',
		anchor: 'footer',
	},
];
