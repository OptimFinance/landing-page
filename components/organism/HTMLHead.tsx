import Head from 'next/head'

interface HeaderProps {
	title?: string;
}

const HTMLHead = ({ title = 'Optum' }: HeaderProps) => {
	return <>
		<Head>
			<title>{title}</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	</>
}

export default HTMLHead