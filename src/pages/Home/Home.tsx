import { FC, Suspense, useState } from 'react'
import s from './Home.module.scss'
import { Popups } from '../../components/Popups/Popups.tsx'
import { Canvas } from '@react-three/fiber'
import { Island } from '../../models/Island.tsx'
import { Sky } from '../../models/Sky.tsx'
import { Plane } from '../../models/Plane.tsx'


export const Home: FC = () => {
	const [isRotating, setIsRotating] = useState(false)
	const [currentStage, setCurrentStage] = useState(1)

	const adjustPlaneForScreenSize = () => {
		const screenScale: number[] = window.innerWidth < 768 ? [1.5, 1.5, 1.5] : [3, 3, 3]
		const screenPosition: number[] = window.innerWidth < 768 ? [0, -1.5, 0] : [0, -4, -4]

		return [screenScale, screenPosition]
	}

	const adjustIslandForScreenSize = (): [number[], number[]] => {
		const screenScale: number[] = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1]
		const screenPosition: number[] = window.innerWidth < 768 ? [0, -6.5, -43.4] : [0, -6.5, -43.4]

		return [screenScale, screenPosition]
	}

	const [islandScale, islandPosition] = adjustIslandForScreenSize()
	const [planeScale, planePosition] = adjustPlaneForScreenSize()

	return (
		<main className={s.main}>
			<Popups currentStage={currentStage} />
			<Canvas camera={{ near: 0.1, far: 1000 }}>
				<Suspense fallback={null}>
					<directionalLight position={[1, 1, 1]} intensity={2} />
					<ambientLight intensity={0.7} />
					<pointLight position={[10, 5, 10]} intensity={2} />
					<spotLight
						position={[0, 50, 10]}
						angle={0.15}
						penumbra={1}
						intensity={2}
					/>
					<hemisphereLight
						// @ts-ignore
						skyColor='#b1e1ff'
						groundColor='#000000'
						intensity={1}
					/>
					<Island isRotating={isRotating} setIsRotating={setIsRotating} scale={islandScale} position={islandPosition}
									currentStage={currentStage}
									setCurrentStage={setCurrentStage}
									rotation={[0.1, 4.7077, 0]} />
					<Sky isRotating={isRotating} />
					<Plane
						isRotating={isRotating}
						position={planePosition}
						rotation={[0, 20.1, 0]}
						scale={planeScale}
					/>
				</Suspense>
			</Canvas>
		</main>
	)
}
