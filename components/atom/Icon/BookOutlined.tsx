import BaseIcon, { IIconProps } from './BaseIcon';

const BookOutlined = ({ size, path }: IIconProps) => {
  return (
    <BaseIcon
      size={size}
      path={
        path || (
          <>
            <defs>
              <linearGradient x1='100%' y1='0%' x2='0%' y2='82.439%' id='a'>
                <stop stopColor='#C9B9F5' offset='0%' />
                <stop stopColor='#83ADFD' offset='100%' />
              </linearGradient>
            </defs>
            <g fill='none' fillRule='evenodd'>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M15.375 4.408c.345 0 .625-.28.625-.625v-.656A3.13 3.13 0 0 0 12.873 0S3.076.001 3.05.004A3.19 3.19 0 0 0 .864.985a3.08 3.08 0 0 0-.862 2.25L0 12.248A3.756 3.756 0 0 0 3.752 16h9.12A3.13 3.13 0 0 0 16 12.873V8.13a3.13 3.13 0 0 0-3.127-3.127H3.125a1.871 1.871 0 0 1-1.873-1.786c-.024-.509.16-.995.516-1.368.361-.379.869-.596 1.393-.596l9.712-.002a1.88 1.88 0 0 1 1.877 1.877v.656c0 .345.28.625.625.625zM3.125 6.251h9.748A1.88 1.88 0 0 1 14.75 8.13v4.744a1.88 1.88 0 0 1-1.877 1.877h-9.12a2.505 2.505 0 0 1-2.503-2.502V5.63a3.117 3.117 0 0 0 1.875.622zm10.375 4.25c0 .431-.35.781-.781.781-1.037-.041-1.036-1.521 0-1.562.431 0 .781.35.781.78zm0-7.374a.625.625 0 0 0-.625-.625h-9.75c-.83.033-.829 1.217 0 1.25h9.75c.345 0 .625-.28.625-.625z'
                transform='translate(4 4)'
                fill='url(#a)'
                fill-rule='nonzero'
                stroke='#131415'
                stroke-width='.5'
              />
            </g>
          </>
        )
      }
    />
  );
};

export default BookOutlined;
