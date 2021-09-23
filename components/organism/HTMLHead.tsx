import Head from 'next/head'

interface HeaderProps {
	title?: string;
}

const HTMLHead = ({ title = 'Optim Finance' }: HeaderProps) => {
	return <>
		<Head>
			<title>{title}</title>
			<link rel="icon" href="/optim_fav.ico" />
			<meta name="description" content="Optim is a yield aggregator for the Cardano blockchain. Optimize your DeFi yields with our suite of automated asset management products. Deposit assets in Optim’s secure vaults and our strategies take care of the rest. Boost your APYs  today. Easy, Automated, Secure." />
			<link href="https://fonts.cdnfonts.com/css/graphik" rel="stylesheet"></link>
			<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@200;300;400;500&display=swap" rel="stylesheet"></link>
		</Head>
	</>
}

export default HTMLHead