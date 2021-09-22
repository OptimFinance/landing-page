interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
	className?: string;
}

const Button = ({ className, children }: IButtonProps) => {
	return <button className={className}>
		{children}
	</button>
}

export default Button
