"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";
import { useScrollStore } from "../preview/scrollStore";

/**
 * Drives the camera down the Z-axis as the user scrolls. Reads progress
 * from the zustand store imperatively (via `getState()` inside useFrame)
 * to avoid re-rendering the scene on every scroll tick — only the camera
 * matrix updates.
 *
 * Phase 1 will swap this linear travel for a CatmullRomCurve3 path so the
 * camera can wind through the redwood corridor instead of going straight.
 */

const CAMERA_START_Z = 6;
const CAMERA_END_Z = -30;
const CAMERA_HEIGHT = 1.6; // ~human eye height, in meters
const LERP_SMOOTHING = 0.08; // higher = snappier camera, lower = more inertia

export default function CameraRig() {
	const { camera } = useThree();
	const smoothed = useRef(0);

	useFrame(() => {
		const target = useScrollStore.getState().progress;
		smoothed.current = MathUtils.lerp(
			smoothed.current,
			target,
			LERP_SMOOTHING,
		);

		const z = MathUtils.lerp(
			CAMERA_START_Z,
			CAMERA_END_Z,
			smoothed.current,
		);
		camera.position.set(0, CAMERA_HEIGHT, z);
		camera.lookAt(0, CAMERA_HEIGHT, z - 10);
	});

	return null;
}
