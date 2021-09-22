interface ITagProps {
	text: string;
	subText?: string | number;
	className?: string;
}

const Tag = ({ text, subText, className = '' }: ITagProps) => {
	return <div className={`inline-block rounded-sm py-3 px-5 border border-white border-opacity-10 bg-optim-dark ${subText ? `
		flex justify-between w-[200px]
	` : ''} ${className}`}>
		<span className='gradient-text text-sm'>{text}</span>
		{subText && <span className='ml-16 text-xs font-mono text-white font-light'>{subText}</span>}
	</div>
}

export default Tag
