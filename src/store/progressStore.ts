import { create } from 'zustand'

export interface ProgressState {
	isLoarding: boolean
	progress: number
}

export interface ProgressAtcion {
	updateIsLoading: () => void
	forwardProgress: () => void
	resetProgress: () => void
}

export const useProgressStore = create<ProgressState & ProgressAtcion>(
	(set) => ({
		isLoarding: false,
		progress: 0,
		forwardProgress: () =>
			set((state: ProgressState) => ({
				...state,
				progress: state.progress + 1,
			})),
		resetProgress: () => set({ progress: 1 }),
		updateIsLoading: () =>
			set((state: ProgressState) => ({
				...state,
				isLoarding: !state.isLoarding,
			})),
	}),
)
