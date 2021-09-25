import BaseIcon, { IIconProps } from "./BaseIcon"

const CloseOutlined = ({ size, path }: IIconProps) => {
	return <BaseIcon
		size={size}
		path={
			path || <g stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" fill="none" fillRule="evenodd">
				<path d="M17.819 17.819 6 6M6 17.819 17.819 6" />
			</g>
		}
	/>
}

export default CloseOutlined
