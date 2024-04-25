import { Html } from '@react-three/drei'
import { FC } from 'react'
import s from './Loader.module.scss'

export const Loader: FC = () => {
	return (
		<Html>
			<div className={s.main}>
				<svg viewBox="0 0 200 200">
					<circle fill="none" stroke="#0072FF" cx="100" cy="100" r="0">
						<animate
							attributeName="r"
							calcMode="spline"
							dur="2"
							values="1;80"
							keyTimes="0;1"
							keySplines="0 .2 .5 1"
							repeatCount="indefinite"
						></animate>
						<animate
							attributeName="strokeWidth"
							calcMode="spline"
							dur="2"
							values="0;25"
							keyTimes="0;1"
							keySplines="0 .2 .5 1"
							repeatCount="indefinite"
						></animate>
						<animate
							attributeName="strokeOpacity"
							calcMode="spline"
							dur="2"
							values="1;0"
							keyTimes="0;1"
							keySplines="0 .2 .5 1"
							repeatCount="indefinite"
						></animate>
					</circle>
				</svg>
			</div>
		</Html>
	)
}
