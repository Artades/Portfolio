import React from 'react'
import styles from '../Grid.module.css'
import Image from 'next/image'

const GridItem = ({ link }) => {
	return (
		<a href={link.link} rel={'noreferrer'} target="_blank">
			<div className={styles.gridItem} key={link._id}>
				<div className={styles.gridItemBody}>
					<div
						className={styles.gradient}
						style={{
							backgroundImage: `linear-gradient(to right,  ${link.gradient.to} 51%, ${link.gradient.from} 100%)`
						}}
					>
						<Image
							width={link.icon.width}
							height={link.icon.width}
							src={link.icon.path}
							alt={'LinkIcon'}
						/>
					</div>
					<p className={styles.description}>{link.description}</p>
				</div>
			</div>
		</a>
	)
}

export default GridItem
