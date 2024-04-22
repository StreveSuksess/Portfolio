import css from '../src/assets/icons/css.svg'
import git from '../src/assets/icons/git.svg'
import github from '../src/assets/icons/github.svg'
import html from '../src/assets/icons/html.svg'
import javascript from '../src/assets/icons/javascript.svg'
import react from '../src/assets/icons/react.svg'
import redux from '../src/assets/icons/redux.svg'
import sass from '../src/assets/icons/sass.svg'
import tailwindcss from '../src/assets/icons/tailwindcss.svg'
import typescript from '../src/assets/icons/typescript.svg'
import pricewise from '../src/assets/icons/pricewise.svg'
import snapgram from '../src/assets/icons/snapgram.svg'
import summiz from '../src/assets/icons/summiz.svg'
import threads from '../src/assets/icons/threads.svg'
import estate from '../src/assets/icons/estate.svg'
import threejs from '../src/assets/icons/threejs.svg'


export const skills: Skill[] = [
	{
		imageUrl: css,
		name: 'CSS'
	},
	{
		imageUrl: git,
		name: 'Git'
	},
	{
		imageUrl: github,
		name: 'GitHub'
	},
	{
		imageUrl: html,
		name: 'HTML'
	},
	{
		imageUrl: javascript,
		name: 'JavaScript'
	},
	{
		imageUrl: react,
		name: 'React'
	},
	{
		imageUrl: redux,
		name: 'Redux'
	},
	{
		imageUrl: sass,
		name: 'Sass'
	},
	{
		imageUrl: tailwindcss,
		name: 'Tailwind CSS'
	},
	{
		imageUrl: typescript,
		name: 'TypeScript'
	},
	{
		imageUrl: threejs,
		name: 'Three js'
	}
]

export const projects: Project[] = [
	{
		iconUrl: pricewise,
		theme: 'red',
		name: 'Kicks',
		description: 'Developed an online store, which implements data retrieval from firebase, data recording, shopping cart with goods, their filtering and sorting, as well as purchase of goods with the subsequent sending of a letter to the mail.',
		link: 'https://github.com/StreveSuksess/Kicks',
		siteLink: 'https://strevesuksess.github.io/Kicks/'
	},
	{
		iconUrl: snapgram,
		theme: 'violet',
		name: 'StreveSuksess Social Network',
		description: 'Created my own social network, where I released a system of profiles, subscriptions to users, chatting with them, authorization and registration via firebase. Also made it possible to write and view posts through news.',
		link: 'https://github.com/StreveSuksess/StreveSuksess-Social-Network',
		siteLink: 'https://strevesuksess.github.io/StreveSuksess-Social-Network/'
	},
	{
		iconUrl: threads,
		theme: 'green',
		name: 'Habit Tracker',
		description: 'Developed in a week a habit tracker with 3d gamification, internal shop, habit tracking by schedule and a calendar with visualisation of their completion.',
		link: 'https://github.com/StreveSuksess/HabitTracker',
		siteLink: 'https://strevesuksess.github.io/HabitTracker/'
	},
	{
		iconUrl: estate,
		theme: 'grey',
		name: 'SMM manager',
		description: 'Together with a team of 5 people developed smm manager for PROD hackathon in 3 days. The functionality was integrated chat gpt for creative posts, delayed posting, workflow system, multiposting and spell check with yandex api. PS: I was the team leader and lead frontend developer in the team.',
		link: '',
		siteLink: ''
	},
	{
		iconUrl: summiz,
		theme: 'yellow',
		name: 'ToDo',
		description: 'Built an app where you can write down your to-do\'s for the day, mark the ones you\'ve done and delete them.',
		link: 'https://github.com/StreveSuksess/ToDo',
		siteLink: 'https://strevesuksess.github.io/ToDo/'
	}
]