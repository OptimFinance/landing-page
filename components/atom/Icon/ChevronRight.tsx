import BaseIcon, { IIconProps } from "./BaseIcon";

const ChevronRight = ({ size, path }: IIconProps) => {
  return (
    <BaseIcon
      size={size}
      path={
        path || (
          <path
            d="M6.332 3.122a.727.727 0 0 0-1.028 1.029L9.154 8l-3.85 3.85a.727.727 0 1 0 1.028 1.028l4.364-4.364a.727.727 0 0 0 0-1.028L6.332 3.122z"
            fill="#8B76C6"
            fillRule="evenodd"
          />
        )
      }
    />
  );
};

export default ChevronRight;
