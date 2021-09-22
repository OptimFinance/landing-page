import Products from '@/components/organism/Products'
import RoadMap from '@/components/organism/RoadMap'
import Team from '@/components/organism/Team'
import Subscription from '@/components/organism/Subscription'

export default function Home() {
	return (
		<div>
			<Products />
			<RoadMap />
			<Team />
			<Subscription />
		</div>
	)
}
