'use client'
import styles from './AboutMe.module.css'
import Image from 'next/image'
import avatar from '../../../public/avatar.jpg'
import EmailButton from '@/app/home/about-me/email-button/page'
import DescriptionButton from '@/app/home/about-me/description-button/page'

const AboutMe = ({ me }) => {
	return (
		<section className={styles.about}>
			<DescriptionButton description={me.description} />
			<div className={styles.body}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<Image
					src={avatar}
					className={styles.avatar}
					alt="Picture of the author"
					width={me.avatar.width}
					height={me.avatar.height}
					quality={me.avatar.quality}
				/>
				<h1 className={styles.title}>
					{me.title} <span>☑️</span>
				</h1>

				<EmailButton />
			</div>
		</section>
	)
}

export default AboutMe
