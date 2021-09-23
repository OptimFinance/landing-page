import Head from 'next/head'

interface HeaderProps {
	title?: string;
}

const HTMLHead = ({ title = 'Optim' }: HeaderProps) => {
	return <>
		<Head>
			<title>{title}</title>
			<link rel="icon" href="/favicon.ico" />
			<link href="https://fonts.cdnfonts.com/css/graphik" rel="stylesheet"></link>
			<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@200;300;400;500&display=swap" rel="stylesheet"></link>
		</Head>
	</>
}

export default HTMLHead