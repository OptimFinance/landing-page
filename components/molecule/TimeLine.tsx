import { ReactNode } from 'react';
import Tag from '../atom/Tag';

interface ITimeLine {
	month: string;
	year: number;
	content: string | ReactNode;
}

const TimeLine = ({ month, year, content }: ITimeLine) => {
	return (
		<div className='border-b border-white border-opacity-20 mb-7 last:border-none'>
			<Tag text={month} subText={year} className='mb-4' />
			<div className='mb-4 font-light leading-7'>{content}</div>
		</div>
	);
};

export default TimeLine;
