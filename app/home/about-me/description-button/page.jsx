import cn from 'classnames'
import parse from 'html-react-parser'
import { useOutside } from '@/app/hooks/useOutside'
import styles from './DescriptionButton.module.css'

const DescriptionButton = ({ description }) => {
	const { isShow, setIsShow, ref } = useOutside(false)

	return (
		<div className={styles.descriptionWrapper} ref={ref}>
			<button
				onClick={() => setIsShow(!isShow)}
				className={cn({
					[styles.active]: isShow
				})}
			>
				<span>About Me</span>
			</button>
			{isShow && (
				<article className={styles.description}>{parse(description)}</article>
			)}
		</div>
	)
}

export default DescriptionButton
