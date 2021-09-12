interface IButtonProps {
	text: string;
	disabled?: boolean;
	className?: string;
}

const Button = ({ text, disabled, className = '' }: IButtonProps) => {
	const normalClasses = 'text-white bg-green-400 hover:bg-green-300 active:bg-green-600'
	const disabledClasses = 'text-gray-600 bg-gray-400 cursor-not-allowed'
	return <button className={`py-2 px-3 ${disabled ? disabledClasses : normalClasses} ${className}`}>
		{text}
	</button>
}

export default Button
