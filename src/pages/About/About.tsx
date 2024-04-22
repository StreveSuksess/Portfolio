import { FC } from 'react'
import s from './About.module.scss'
import { skills } from '../../constants.tsx'
import { Footer } from '../../components/Footer/Footer.tsx'

export const About: FC = () => {
	return (
		<section className={s.about + ' container'}>
			<h1 className={s.title}>Hello, I'm <span>StreveSuksess</span></h1>
			<p className={s.text}>Frontend developer based in Russia, specializing in technical education through hands-on
				learning and building applications.</p>
			<h2 className={s.skillsTitle}>My Skills</h2>
			<div className={s.cards}>
				{skills.map((skill: Skill) =>
					<div title={skill.name} className={s.card}>
						<div className={s.back}></div>
						<div className={s.front}>
							<img src={skill.imageUrl} alt='' />
						</div>
					</div>
				)}
			</div>
			<Footer />
		</section>
	)
}
