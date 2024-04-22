import { create } from 'zustand'

export interface RegistrationProgress {
	progress: number
	forwardProgress: () => void
	resetProgress: () => void
}

export const useProgressStore = create<RegistrationProgress>((set) => ({
	progress: 1,
	forwardProgress: () =>
		set((state: RegistrationProgress) => ({ progress: state.progress + 1 })),
	resetProgress: () => set({ progress: 1 }),
}))
