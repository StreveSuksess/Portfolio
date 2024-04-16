import s from './Projects.module.scss'
import { Footer } from '../../components/Footer/Footer.tsx'
import { projects } from '../../constants.tsx'

export const Projects = () => {
	return (
		<section className={s.projects + ' container'}>
			<h1 className={s.title}>My <span>Projects</span></h1>
			<p className={s.text}>I've embarked on numerous projects throughout the years, but these are the ones I hold
				closest to my heart. Many of them are open-source, so if you come across something that piques your interest,
				feel free to explore the codebase and contribute your ideas for further enhancements. Your collaboration is
				highly valued!</p>
			<div className={s.projectsContainer}>
				{projects.map((project: Project) =>
					<div className={s.project}>
						<div className={s.block}>
							<div className={s.back + ' ' + s[project.theme]}></div>
							<div className={s.front}>
								<img src={project.iconUrl} alt='' />
							</div>
						</div>
						<div className={s.projectInner}>
							<h3>{project.name}</h3>
							<p>{project.description}</p>
							<div className={s.links}>
								{
									project.siteLink &&
									<a className={s.siteLink} href={project.siteLink}>
										<span>Site Link</span>
										<svg xmlns='http://www.w3.org/2000/svg' width='14' height='15' viewBox='0 0 14 15'>
											<path d='M1.16602 7.49984H12.8327M12.8327 7.49984L6.99935 1.6665M12.8327 7.49984L6.99935 13.3332'
														stroke='#406AFF' strokeWidth='1.66667' strokeLinecap='round' strokeLinejoin='round' />
										</svg>
									</a>
								}
								{
									project.link &&
									<a className={s.githubLink} href={project.link}>
										<span>Github Link</span>
										<svg xmlns='http://www.w3.org/2000/svg' width='14' height='15' viewBox='0 0 14 15' fill='none'>
											<path d='M1.16602 7.49984H12.8327M12.8327 7.49984L6.99935 1.6665M12.8327 7.49984L6.99935 13.3332'
														stroke='#406AFF' strokeWidth='1.66667' strokeLinecap='round' strokeLinejoin='round' />
										</svg>
									</a>
								}
							</div>
						</div>
					</div>
				)}
			</div>
			<Footer />
		</section>
	)
}
