import { useGLTF } from '@react-three/drei'
import { FC, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

type Props = {
	isRotating: boolean
}

export const Sky: FC<Props> = (props) => {
	const sky = useGLTF('../src/assets/3d/sky.glb')
	const skyRef = useRef()

	useFrame((_, delta) => {
		if (props.isRotating) {
			// @ts-ignore
			skyRef.current.rotation.y += 0.25 * delta
		}
	})

	return (
		// @ts-ignore
		<mesh ref={skyRef}>
			<primitive object={sky.scene} />
		</mesh>
	)
}
