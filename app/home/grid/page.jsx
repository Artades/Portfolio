import React from 'react'
import styles from './Grid.module.css'
import GridItem from '@/app/home/grid/grid-item/page'

const Grid = ({ links }) => {
	return (
		<section className={styles.grid}>
			<div className={styles.body}>
				{typeof links !== undefined &&
					links.map(link => {
						// eslint-disable-next-line react/jsx-key
						return <GridItem link={link} key={link._id} />
					})}
			</div>
		</section>
	)
}

export default Grid
