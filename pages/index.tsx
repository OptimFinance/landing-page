import Link from 'next/link'

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-6xl font-bold">
					Welcome to{' '}
					<a className="text-blue-600" href="#">
						Optum
					</a>
				</h1>
				<div className='my-5 text-center'>
					<span className='mr-4'>
						<Link href={{
							pathname: '/paths/[slug]',
							query: {
								slug: 'Optum-1'
							}
						}} passHref>
							<a className='text-blue-600 hover:text-blue-800'>Optum 1</a>
						</Link>
					</span>
					<span>
						<Link href={{
							pathname: '/paths/[slug]',
							query: {
								slug: 'Optum-2'
							}
						}} passHref>
							<a className='text-blue-600 hover:text-blue-800'>Optum 2</a>
						</Link>
					</span>
				</div>
			</main>
			<footer className="flex items-center justify-center w-full h-24 border-t">
				<a
					className="flex items-center justify-center"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
				</a>
			</footer>
		</div>
	)
}
