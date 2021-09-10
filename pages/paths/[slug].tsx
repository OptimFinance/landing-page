import { useRouter } from "next/dist/client/router"

const PathTest = () => {
	const router = useRouter()

	return <div>
		<h2 className='text-gray-400 pl-10 pt-6'>{router.query?.slug || "Template text"}</h2>
		<div className='pl-10 pt-6 cursor-pointer text-blue-600 hover:text-blue-800' onClick={() => router.back()}>
			{"<= Back"}
		</div>
	</div>
}

export default PathTest