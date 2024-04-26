import { create } from 'zustand'

export interface ResponseData {
	result: string
	returnMessage: string
}

type RequestStatus = 'idle' | 'loading' | 'success' | 'error'
type ExchangeSelectStep =
	| 'beforeSelection'
	| 'afterSelection'
	| 'benefitSelection'
	| 'uidInput'

export interface ProgressState {
	requestStatus: RequestStatus
	progress: number
	exchangeSelectStep: ExchangeSelectStep
}

export interface ProgressAtcion {
	updateRequestStatus: (value: RequestStatus) => void
	forwardProgress: () => void
	resetProgress: () => void
	updateExchangeSelectStep: (value: ExchangeSelectStep) => void
}

export const useProgressStore = create<ProgressState & ProgressAtcion>(
	(set) => ({
		requestStatus: 'idle',
		progress: 0,
		exchangeSelectStep: 'beforeSelection',
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
		updateExchangeSelectStep: (value: ExchangeSelectStep) =>
			set((state: ProgressState) => ({ ...state, exchangeSelectStep: value })),
	}),
)
