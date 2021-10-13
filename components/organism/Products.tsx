import React from 'react';
import ProductCard from '../molecule/ProductCard';

const Products = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className='mb-14 px-5 mt-10 md:px-0 md:mb-16'>
      <div className='md:container'>
        <div className='text-sm font-medium tracking-[6px] uppercase mb-2 gradient-text bg-gradient-to-r from-[#80acfd] to-[#e0bdf1]'>
          Products
        </div>
        <h2 className='text-[#d8d8d8] text-[40px] mb-8 md:text-[50px]'>
          Bringing Superpower to DeFi
        </h2>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-10'>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              img={product.img}
              content={product.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Products;

const products = [
  {
    title: 'Single Asset Vaults',
    img: '/assets/ic-single.svg',
    content:
      'Innovative passive investments vehicles that optimize yield for your assets. Multiple strategies per vault increase APY and update to capture the best new yield opportunities. Easy deposits and withdrawals. Secure and audited contracts.',
  },
  {
    title: 'DEX LP Vaults',
    img: '/assets/ic-dex-lp.svg',
    content:
      'Auto-management of DEX LP positions. Maximize yields with auto-compounding. Minimize impermanent loss with volatility auto-liquidation. Want to both auto-compound + go long on your earned governance tokens? Set to 50/50 hold/harvest and forget. ',
  },
  {
    title: 'Lender Ops',
    img: '/assets/group-22.svg',
    content:
      'Automatically shift your assets between lenders to earn the best interest rates on the market. Simple, straightforward lending optimized with Optim.',
  },
  {
    title: 'Staking Ops',
    img: '/assets/ic-stacking.svg',
    content:
      'Optimize your staking for yield and/or a cause. We’ll ensure high performance,  automatically re-stake ADA rewards, and auto-convert some or all your ADA to another token to build positions across the ecosystem.',
  },
];
