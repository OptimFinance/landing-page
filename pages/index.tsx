import Button from '@/components/atom/button'
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
					<span className='mr-4 text-blue-600 hover:text-blue-800'>
						<Link href={{
							pathname: '/paths/[slug]',
							query: {
								slug: 'Optum-1'
							}
						}} passHref>
							<a>Optum 1</a>
						</Link>
					</span>
					<span className='text-blue-600 hover:text-blue-800'>
						<Link href={{
							pathname: '/paths/[slug]',
							query: {
								slug: 'Optum-2'
							}
						}} passHref>
							<a>Optum 2</a>
						</Link>
					</span>
				</div>
				<div className='my-4 flex justify-center'>
					<Link href={{
						pathname: '/paths/[slug]',
						query: {
							slug: 'Optum-1'
						}
					}} passHref>
						<div>
							<Button text='Button clickable' />
						</div>
					</Link>
					<Button text='Button disabled' disabled className='ml-4' />
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
