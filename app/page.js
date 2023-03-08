import { Home } from '@/app/home/page'
import Circles from '@/app/home/circles/page'

export default function Page() {
	return (
		<div className="app">
			<div className="container">
				<Home />
			</div>
			<Circles />
		</div>
	)
}
