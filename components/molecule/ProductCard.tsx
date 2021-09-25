interface IProductCard {
	img: string;
	title: string;
	content: string;
}

const ProductCard = ({ img, title, content }: IProductCard) => {
	return (
		<div className='flex border border-white border-opacity-10 p-4 rounded-2xl bg-optim-dark'>
			<div className='w-20 h-20 p-[10px] rounded-lg bg-black'>
				<img width="60" height="60" src={img} alt={title} />
			</div>
			<div className='flex-1 ml-4'>
				<h3 className='font-medium text-xl text-[#d8d8d8] mb-3'>
					{title}
				</h3>
				<p className='font-light text-sm leading-[1.57] tracking-[0.4px]'>{content}</p>
			</div>
		</div>
	);
};

export default ProductCard;
