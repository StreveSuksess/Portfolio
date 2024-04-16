import { FC } from 'react'
import s from './Footer.module.scss'

export const Footer: FC = () => {
	return (
		<footer className={s.footer}>
			<h2 className={s.title}>
				Have a project in mind?
				<br />
				Let's build something together!
			</h2>
			<a href='https://t.me/strevesuksess' className={s.link}>Contact</a>
		</footer>
	)
}
