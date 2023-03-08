import styles from './Home.module.css'
import AboutMe from '@/app/home/about-me/page'
import axios from 'axios'
import Grid from '@/app/home/grid/page'
import { API_URL } from '@/app/constants'

export const Home = async () => {
	const links = await axios.get(`${API_URL}/links`).then(({ data }) => data)
	//----
	const me = await axios.get(`${API_URL}/me`).then(({ data }) => data)
	return (
		<div className={styles.home}>
			<div className={styles.body}>
				<AboutMe me={me} />
				<Grid links={links} />
			</div>
		</div>
	)
}
