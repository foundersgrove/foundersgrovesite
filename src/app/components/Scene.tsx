"use client";

import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Color, Fog } from "three";
import CameraRig from "./CameraRig";
import RedwoodTrunks from "./RedwoodTrunks";

function SceneEnvironment() {
	const { scene } = useThree();

	useEffect(() => {
		scene.background = new Color("#0a1810");
		scene.fog = new Fog("#0a1810", 6, 35);
	}, [scene]);

	return null;
}

export default function Scene() {
	return (
		<Canvas
			camera={{ position: [0, 1.6, 6], fov: 50 }}
			gl={{ antialias: true }}
			dpr={[1, 2]}
		>
			<SceneEnvironment />
			<CameraRig />
			<directionalLight position={[0, 8, -28]} intensity={2.2} color="#a6e2a3" />
			<directionalLight castShadow position={[10, 8, 0]} intensity={4} color="#a6e2a3" />
			<ambientLight intensity={0.45} color="#506d4f" />

			{/* Ground plane */}
			<mesh rotation-x={-Math.PI / 2} position={[0, 0, -10]}>
				<planeGeometry args={[12, 80]} />
        <meshStandardMaterial color="#1a2e1a" />
			</mesh>

			<RedwoodTrunks />
		</Canvas>
	);
}
