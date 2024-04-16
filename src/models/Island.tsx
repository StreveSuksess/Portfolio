import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'


type Props = {
	position: number[],
	scale: number[],
	rotation: number[],
	isRotating: boolean,
	setIsRotating: Dispatch<SetStateAction<boolean>>,
	currentStage: number,
	setCurrentStage: Dispatch<SetStateAction<number>>
}

export const Island: FC<Props> = (props) => {
	const { nodes, materials } = useGLTF('../src/assets/3d/island.glb')
	const islandRef = useRef()
	const { gl, viewport } = useThree()
	const lastX = useRef(0)
	const rotationSpeed = useRef(0)
	const dampingFactor = 0.95
	const [moveRight, setMoveRight] = useState(false)
	const [moveLeft, setMoveLeft] = useState(false)

	const getDeviceType = (): 'mobile' | 'desktop' => {
		const userAgent: string = navigator.userAgent.toLowerCase()
		const isMobile: boolean = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent)
		return isMobile ? 'mobile' : 'desktop'
	}


	const handlePointerDown = (event: any) => {
		event.stopPropagation()
		event.preventDefault()
		props.setIsRotating(true)
		lastX.current = event.touches ? event.touches[0].clientX : event.clientX
	}
	const handlePointerUp = (event: any) => {
		event.stopPropagation()
		event.preventDefault()
		props.setIsRotating(false)
	}

	const handlePointerMove = (event: any) => {
		event.stopPropagation()
		event.preventDefault()
		if (props.isRotating) {
			const clientX = event.touches ? event.touches[0].clientX : event.clientX
			const delta = (clientX - lastX.current) / viewport.width

			// @ts-ignore
			islandRef.current.rotation.y += delta * (event.touches ? 0.005 : 0.01) * Math.PI
			lastX.current = clientX
			rotationSpeed.current = delta * (event.touches ? 0.005 : 0.01) * Math.PI
		}
	}

	const handleKeyDown = (event: any) => {
		if (event.key === 'ArrowLeft') {
			if (!props.isRotating) props.setIsRotating(true)
			setMoveLeft(true)
		} else if (event.key === 'ArrowRight') {
			if (!props.isRotating) props.setIsRotating(true)
			setMoveRight(true)
		}
	}

	const handleKeyUp = (event: any) => {
		if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
			props.setIsRotating(false)
			setMoveRight(false)
			setMoveLeft(false)
		}
	}

	useEffect(() => {
		const canvas = gl.domElement
		if (getDeviceType() === 'mobile') {
			canvas.addEventListener('touchstart', handlePointerDown)
			canvas.addEventListener('touchend', handlePointerUp)
			canvas.addEventListener('touchmove', handlePointerMove)
		} else {
			canvas.addEventListener('pointerdown', handlePointerDown)
			canvas.addEventListener('pointerup', handlePointerUp)
			canvas.addEventListener('pointermove', handlePointerMove)
			window.addEventListener('keydown', handleKeyDown)
			window.addEventListener('keyup', handleKeyUp)
		}

		return () => {
			if (getDeviceType() === 'mobile') {
				canvas.removeEventListener('touchstart', handlePointerDown)
				canvas.removeEventListener('touchend', handlePointerUp)
				canvas.removeEventListener('touchmove', handlePointerMove)
			} else {
				canvas.removeEventListener('pointerdown', handlePointerDown)
				canvas.removeEventListener('pointerup', handlePointerUp)
				canvas.removeEventListener('pointermove', handlePointerMove)
				window.removeEventListener('keydown', handleKeyDown)
				window.removeEventListener('keyup', handleKeyUp)
			}
		}
	}, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

	useFrame(() => {
		if (moveRight) {
			// @ts-ignore
			islandRef.current.rotation.y -= 0.005 * Math.PI
			rotationSpeed.current = -0.005
		}
		if (moveLeft) {
			// @ts-ignore
			islandRef.current.rotation.y += 0.005 * Math.PI
			rotationSpeed.current = 0.005
		}
		if (!props.isRotating) {
			rotationSpeed.current *= dampingFactor
			if (Math.abs(rotationSpeed.current) < 0.001) {
				rotationSpeed.current = 0
			}
			// @ts-ignore
			islandRef.current.rotation.y += rotationSpeed.current
		} else {
			// @ts-ignore
			const rotation = islandRef.current.rotation.y
			const normalizedRotation =
				((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)

			switch (true) {
				case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
					props.setCurrentStage(4)
					break
				case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
					props.setCurrentStage(3)
					break
				case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
					props.setCurrentStage(2)
					break
				case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
					props.setCurrentStage(1)
					break
				default:
					props.setCurrentStage(0)
			}
		}
	})

	return (
		// @ts-ignore
		<group ref={islandRef} scale={props.scale} position={props.position} rotation={props.rotation}>
			<mesh
				// @ts-ignore
				geometry={nodes.polySurface944_tree_body_0?.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				// @ts-ignore
				geometry={nodes.polySurface945_tree1_0?.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				// @ts-ignore
				geometry={nodes.polySurface946_tree2_0?.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				// @ts-ignore
				geometry={nodes.polySurface947_tree1_0?.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				// @ts-ignore
				geometry={nodes.polySurface948_tree_body_0?.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				// @ts-ignore
				geometry={nodes.polySurface949_tree_body_0?.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				// @ts-ignore
				geometry={nodes.pCube11_rocks1_0?.geometry}
				material={materials.PaletteMaterial001}
			/>
		</group>
	)
}

useGLTF.preload('/island.glb')
