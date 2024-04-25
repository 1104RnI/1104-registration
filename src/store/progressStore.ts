import { create } from 'zustand'

type RequestStatus = 'idle' | 'loading' | 'success' | 'error'

export interface ProgressState {
	requestStatus: RequestStatus
	progress: number
}

export interface ProgressAtcion {
	updateRequestStatus: (value: RequestStatus) => void
	forwardProgress: () => void
	resetProgress: () => void
}

export const useProgressStore = create<ProgressState & ProgressAtcion>(
	(set) => ({
		requestStatus: 'idle',
		progress: 0,
		forwardProgress: () =>
			set((state: ProgressState) => ({
				...state,
				progress: state.progress + 1,
			})),
		resetProgress: () => set({ progress: 1 }),
		updateRequestStatus: (value: RequestStatus) =>
			set((state: ProgressState) => ({
				...state,
				requestStatus: value,
			})),
	}),
)
