import { create } from 'zustand'

export type PersonalInfo = {
	name: string
	tel: string
	birth: { year: string; month: string }
}

export type Exchange = 'bybit' | 'binance' | 'bitget' | 'okx' | 'others' | ''

export interface UserDataState {
	personalInfo: PersonalInfo
	tradingViewId: string
	exchange: Exchange
	uid: string
}

type UserDataAction = {
	updateUserData: (field: string, value: string) => void
	updatePersonalInfo: (field: string, value: string) => void
	updatePersonalInfoBirth: (field: string, value: string) => void
}

export const useUserDataStore = create<UserDataState & UserDataAction>(
	(set) => ({
		personalInfo: { name: '', tel: '', birth: { year: '', month: '' } },
		tradingViewId: '',
		exchange: '',
		uid: '',
		updateUserData: (field, value) =>
			set((state) => ({ ...state, [field]: value })),
		updatePersonalInfo: (field, value) =>
			set((state) => ({
				...state,
				personalInfo: { ...state.personalInfo, [field]: value },
			})),
		updatePersonalInfoBirth: (field, value) =>
			set((state) => ({
				...state,
				personalInfo: {
					...state.personalInfo,
					birth: { ...state.personalInfo.birth, [field]: value },
				},
			})),
	}),
)
