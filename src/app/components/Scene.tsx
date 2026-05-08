"use client";

import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Color, Fog } from "three";
import CameraRig from "./CameraRig";

/**
 * Sets the scene background and exponential-feeling fog so the far end of
 * the corridor fades into darkness. Lives inside the Canvas so it has
 * access to the three.js scene via useThree.
 */
function SceneEnvironment() {
	const { scene } = useThree();

	useEffect(() => {
		scene.background = new Color("#0a1810");
		scene.fog = new Fog("#0a1810", 6, 35);
	}, [scene]);

	return null;
}

/**
 * Phase 0 scene — the bare scaffolding for what becomes the redwood
 * corridor. Right now it has:
 *   - Forest-tinted ambient + a directional "sun" coming from the far end
 *     to mimic light at the end of the tunnel.
 *   - A long ground plane so motion is legible (otherwise a single object
 *     in fog gives no sense of speed).
 *   - A reference cube at z=-12 to confirm scroll-driven camera movement
 *     is working.
 *
 * Phase 1 replaces the cube + plane with instanced redwood trunks lining
 * a path, and swaps the directional light for a glowing volumetric source
 * at the corridor's end.
 */
export default function Scene() {
	return (
		<Canvas
			camera={{ position: [0, 1.6, 6], fov: 50 }}
			gl={{ antialias: true }}
			dpr={[1, 2]}
		>
			<SceneEnvironment />
			<CameraRig />
			<directionalLight
				position={[0, 8, -28]}
				intensity={2.2}
				color="#a6e2a3"
      />
			<ambientLight intensity={0.25} color="#506d4f" />

			{/* Ground plane — gives the eye something to track during scroll */}
			<mesh rotation-x={-Math.PI / 2} position={[0, 0, -10]}>
				<planeGeometry args={[12, 80]} />
				<meshStandardMaterial color="#1a2e1a" />
			</mesh>

			{/* Phase 0 reference cube — replace in Phase 1 */}
			<mesh position={[0, 1, -12]}>
				<boxGeometry args={[1, 0, 1]} />
				<meshStandardMaterial color="#739E71" />
			</mesh>
		</Canvas>
	);
}
