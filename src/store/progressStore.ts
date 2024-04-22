import { create } from 'zustand'

export interface ProgressState {
	progress: number
}

export interface ProgressAtcion {
	forwardProgress: () => void
	resetProgress: () => void
}

export const useProgressStore = create<ProgressState & ProgressAtcion>(
	(set) => ({
		progress: 1,
		forwardProgress: () =>
			set((state: ProgressState) => ({ progress: state.progress + 1 })),
		resetProgress: () => set({ progress: 1 }),
	}),
)
