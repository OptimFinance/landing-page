import { ReactNode } from "react";
import Tag from "../atom/Tag";

interface ITimeLine {
  month: string;
  year: number;
  content: string | ReactNode;
}

const TimeLine = ({ month, year, content }: ITimeLine) => {
  return (
    <div className="border-b border-white border-opacity-20 last:border-none md:border-none md:flex">
      <div>
        <Tag text={month} subText={year} className="mb-4" />
      </div>
      <div className="mb-4 font-light leading-6 md:pl-10 md:mb-0">
        <div className="md:min-h-[70px] md:flex md:flex-col md:justify-center break-words">
          {content}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
