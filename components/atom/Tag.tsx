interface ITagProps {
	text: string;
	subText?: string | number;
	className?: string;
}

const Tag = ({ text, subText, className = '' }: ITagProps) => {
	return <div className={`inline-block rounded-sm py-3 px-5 border border-white border-opacity-10 bg-optim-dark ${subText ? `
		flex justify-between w-[200px] items-center
	` : ''} ${className}`}>
		<span className='gradient-text text-sm'>{text}</span>
		{subText && <span className='text-base leading-6 font-mono text-white font-light'>{subText}</span>}
	</div>
}

export default Tag
