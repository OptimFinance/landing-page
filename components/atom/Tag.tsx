interface ITagProps {
  text: string;
  subText?: string | number;
  className?: string;
}

const Tag = ({ text, subText, className = "" }: ITagProps) => {
  return (
    <div
      className={`inline-block rounded-sm py-3 px-5 border border-white border-opacity-10 hover:border-[#2a72eb] bg-optim-dark ${
        subText
          ? `
		flex justify-between w-[200px] items-center md:flex-col md:w-[140px] md:items-start
	`
          : ""
      } ${className}`}
    >
      <span className="gradient-text text-sm md:text-lg md:leading-5 md:mb-1">
        {text}
      </span>
      {subText && (
        <span className="text-base md:text-lg leading-6 md:leading-5 font-mono text-white font-light">
          {subText}
        </span>
      )}
    </div>
  );
};

export default Tag;
