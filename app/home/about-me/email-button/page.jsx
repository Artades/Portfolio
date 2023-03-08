import React from 'react'
import styles from './EmailButton.module.css'
import Image from 'next/image'
import icon from '../../../../public/icons/email.svg'

const EmailButton = () => {
	return (
		<a
			href="mailto:artemijgalaj@gmail.com"
			target="_blank"
			rel="noreferrer"
			title="artemijaglaj@gmail.com"
		>
			<button className={styles.button}>
				<Image width={20} height={20} src={icon} alt="Email" />
				<span>Mail</span>
			</button>
		</a>
	)
}

export default EmailButton
