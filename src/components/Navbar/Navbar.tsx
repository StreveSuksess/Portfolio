import { FC } from 'react'
import s from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

export const Navbar: FC = () => {
	return (
		<header className={s.navbar + ' container'}>
			<NavLink to={'/Portfolio'} className={s.logo}>
				<span className={s.gradientText}>SS</span>
			</NavLink>
			<nav className={s.nav}>
				<NavLink to={'/Portfolio/about'}
								 className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>About</NavLink>
				<NavLink to={'/Portfolio/projects'}
								 className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>Projects</NavLink>
				<a href={'https://t.me/strevesuksess'} className={s.link}>Contact</a>
			</nav>
		</header>
	)
}
