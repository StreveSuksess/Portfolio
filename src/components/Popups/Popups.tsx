import { FC, useEffect, useState } from 'react'
import s from './Popups.module.scss'
import { Link } from 'react-router-dom'

type Props = {
	currentStage: number
}

export const Popups: FC<Props> = (props) => {
	const [closeAnim, setCloseAnim] = useState(false)
	const [visible, setVisible] = useState(false)
	const [localStage, setLocalStage] = useState(props.currentStage)

	useEffect(() => {
		let timeout: number = 0
		if (props.currentStage == 0) {
			setCloseAnim(true)
			timeout = setTimeout(() => {
				setVisible(false)
				setCloseAnim(false)
			}, 300)
		} else {
			setCloseAnim(false)
			setVisible(true)
			setLocalStage(props.currentStage)
		}
		return () => {
			clearTimeout(timeout)
		}
	}, [props.currentStage])

	return (
		<div className={`${s.popupContainer} ${!visible && s.dn} ${closeAnim && s.closeAnim}`}>
			<div className={s.popup}>
				{
					localStage == 1 &&
					<>
						<span>Hi, I am <span className={s.bold}>StreveSuksess</span>👋</span>
						<span>A Software Engineer from Russia</span>
					</>
				}
				{
					localStage == 2 &&
					<>
						<span className={s.textWithButton}>Worked with many companies and picked up many skills along the way</span>
						<Link className={s.button} to={'/Portfolio/about'}>
							<span>Learn more</span>
							<svg xmlns='http://www.w3.org/2000/svg' width='14' height='15' viewBox='0 0 14 15' fill='none'>
								<path d='M1.16602 7.49984H12.8327M12.8327 7.49984L6.99935 1.6665M12.8327 7.49984L6.99935 13.3332'
											stroke='#406AFF' strokeWidth='1.66667' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						</Link>
					</>
				}
				{
					localStage == 3 &&
					<>
						<span className={s.textWithButton}>Led multiple projects to success over the years. Curious about the impact?</span>
						<Link className={s.button} to={'/Portfolio/projects'}>
							<span>Visit my portfolio</span>
							<svg xmlns='http://www.w3.org/2000/svg' width='14' height='15' viewBox='0 0 14 15' fill='none'>
								<path d='M1.16602 7.49984H12.8327M12.8327 7.49984L6.99935 1.6665M12.8327 7.49984L6.99935 13.3332'
											stroke='#406AFF' strokeWidth='1.66667' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						</Link>
					</>
				}
				{
					localStage == 4 &&
					<>
						<span
							className={s.textWithButton}>Need a project done or looking for a dev? I'm just a few keystrokes away</span>
						<a className={s.button} href='https://t.me/strevesuksess'>
							<span>Let's talk</span>
							<svg xmlns='http://www.w3.org/2000/svg' width='14' height='15' viewBox='0 0 14 15' fill='none'>
								<path d='M1.16602 7.49984H12.8327M12.8327 7.49984L6.99935 1.6665M12.8327 7.49984L6.99935 13.3332'
											stroke='#406AFF' strokeWidth='1.66667' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						</a>
					</>
				}
			</div>
		</div>
	)
}
