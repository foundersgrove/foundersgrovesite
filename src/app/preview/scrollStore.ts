import { create } from "zustand";

/**
 * Tracks normalized page scroll progress (0 → 1) so that the 3D scene and
 * any HTML overlays can react to scroll without each one wiring up its own
 * listener. SmoothScroll writes here on every Lenis tick; CameraRig and
 * sections read from it.
 */
interface ScrollState {
	progress: number;
	setProgress: (p: number) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
	progress: 0,
	setProgress: (progress) => set({ progress }),
}));
