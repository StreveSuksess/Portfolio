/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useAnimations, useGLTF } from '@react-three/drei'
import { FC, useEffect, useRef } from 'react'

type Props = {
	position: number[]
	scale: number[]
	rotation: number[]
}

export const Plane: FC<Props> = (props) => {
	const planeRef = useRef()
	const { scene, animations } = useGLTF('/Portfolio/3d/plane.glb')
	const { actions } = useAnimations(animations, planeRef)

	useEffect(() => {
		actions['Take 001']?.play()
	}, [actions])
	return (
		<mesh
			// @ts-ignore
			scale={props.scale}
			// @ts-ignore
			rotation={props.rotation}
			// @ts-ignore
			position={props.position}
			// @ts-ignore
			ref={planeRef}
		>
			<primitive object={scene} />
		</mesh>
	)
}
