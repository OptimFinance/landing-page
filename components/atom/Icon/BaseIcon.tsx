import { ReactNode } from "react"

export interface IIconProps {
	path?: ReactNode;
	size?: number;
}

const BaseIcon = ({ path, size = 24 }: IIconProps) => {
	return <svg className='inline' width={size} height={size} xmlns="http://www.w3.org/2000/svg">
		{path}
	</svg>
}

export default BaseIcon
