interface IProductCard {
  img: string;
  title: string;
  content: string;
}

const ProductCard = ({ img, title, content }: IProductCard) => {
  return (
    <div className="flex border border-white border-opacity-10 p-4 lg:p-7 rounded-2xl lg:rounded-[20px] bg-optim-dark hover:border-[#2a72eb]">
      <div className="w-20 h-20 lg:w-[120px] lg:h-[120px] p-[10px] lg:p-4 rounded-lg lg:rounded-[20px] bg-black">
        <img width="100%" height="100%" src={img} alt={title} />
      </div>
      <div className="flex-1 ml-4 lg:ml-7">
        <h3 className="font-medium text-xl text-[#d8d8d8] mb-3 lg:mb-6 lg:text-2xl">
          {title}
        </h3>
        <p className="font-light text-sm leading-[1.57] tracking-[0.4px] lg:text-base">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
