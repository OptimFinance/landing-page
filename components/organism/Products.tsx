import ProductCard from "../molecule/ProductCard";

const Products = () => {
	return (
		<section className='mb-14 px-5 mt-10'>
			<div className='text-sm font-medium tracking-[6px] uppercase mb-2 gradient-text bg-gradient-to-r from-[#80acfd] to-[#e0bdf1]'>
				Products
			</div>
			<div className='text-[#d8d8d8] text-[40px] mb-8'>
				Bringing Superpower to DEFI
			</div>
			<div className='space-y-5'>
				{products.map((product, index) => <ProductCard
					key={index}
					title={product.title}
					img={product.img}
					content={product.content}
				/>)}
			</div>
		</section>
	);
};

export default Products;

const products = [
	{
		title: 'Single Asset Vaults',
		img: '/assets/ic-single.png',
		content: 'Innovative passive investments vehicles that optimize yield for your assets. Multiple strategies per vault increase APY and update to capture the best new yield opportunities. Easy deposits and withdrawals. Secure and audited contracts.'
	},
	{
		title: 'DEX LP Vaults',
		img: '/assets/ic-dex-lp.png',
		content: 'Auto-management of DEX LP positions. Maximize yields with auto-compounding. Minimize impermanent loss with volatility auto-liquidation. Want to both auto-compound + go long on your earned governance tokens? Set to 50/50 hold/harvest and forget. '
	},
	{
		title: 'Lender Ops',
		img: '/assets/group-22.png',
		content: 'Automatically shift your assets between lenders to earn the best interest rates on the market. Simple, straightforward lending optimized with Optim.'
	},
	{
		title: 'Staking Ops',
		img: '/assets/ic-stacking.png',
		content: 'Optimize your staking for yield and/or a cause. We’ll ensure high performance,  automatically re-stake ADA rewards, and auto-convert some or all your ADA to another token to build positions across the ecosystem.'
	},
]