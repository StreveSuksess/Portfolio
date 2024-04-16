import { FC, useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

type Props = {
	position: number[],
	scale: number[],
	rotation: number[],
	isRotating: boolean,
}

export const Plane: FC<Props> = (props) => {
	const planeRef = useRef()
	const { scene, animations } = useGLTF('../src/assets/3d/plane.glb')
	const { actions } = useAnimations(animations, planeRef)

	useEffect(() => {
		if (props.isRotating) {
			actions['Take 001']?.play()
		} else {
			actions['Take 001']?.stop()
		}
	}, [actions, props.isRotating])
	return (
		// @ts-ignore
		<mesh scale={props.scale} rotation={props.rotation} position={props.position} ref={planeRef}>
			<primitive object={scene} />
		</mesh>
	)
}
