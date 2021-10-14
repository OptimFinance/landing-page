import Head from 'next/head';

interface HeaderProps {
  title?: string;
}

const HTMLHead = ({ title = 'Optim Finance' }: HeaderProps) => {
  const description =
    'Optim is a yield aggregator for the Cardano blockchain. Optimize your DeFi yields with our suite of automated asset management products. Deposit assets in Optim’s secure vaults and our strategies take care of the rest. Boost your APYs  today. Easy, Automated, Secure.';
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='title' content={title} />
        <meta property='og:title' content={title} />
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
        <meta
          name='keywords'
          content='optim,yield aggregator,aggregator,cardano,Cardano blockchain,defi'
        />
        <meta name='copyright' content='Copyright 2021 Optim' />
        <meta name='image' content='/assets/optim_og_image.png' />
        <meta property='og:image' content='/assets/optim_og_image.png' />
        {/* <link
          href='https://fonts.cdnfonts.com/css/graphik'
          rel='preload stylesheet'
          as='font'
        ></link> */}
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Mono:wght@200;300;400;500&display=swap'
          rel='preload stylesheet'
          as='font'
        ></link>
      </Head>
    </>
  );
};

export default HTMLHead;
