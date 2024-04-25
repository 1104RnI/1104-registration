import { create } from 'zustand'

export type PersonalInfo = {
	name: string
	tel: string
	birth: { year: string; month: string }
}

export interface UserDataState {
	email: string
	personalInfo: PersonalInfo
	tradingViewId: string
	beginner: boolean
	exchange: string
	referral: string
	uid: string
	assetManagement: string
}

export interface ExchangeDataState {
	exchangeList: { name: string; koName: string; referralCode: string }[]
}

type UserDataAction = {
	updateUserData: (field: string, value: string) => void
	updatePersonalInfo: (field: string, value: string) => void
	updatePersonalInfoBirth: (field: string, value: string) => void
}

export const useUserDataStore = create<UserDataState & UserDataAction>(
	(set) => ({
		email: '',
		personalInfo: { name: '', tel: '', birth: { year: '', month: '' } },
		tradingViewId: '',
		beginner: false,
		exchange: '',
		referral: '',
		uid: '',
		assetManagement: '',
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

export const useExchangeDataStore = create<ExchangeDataState>((set) => ({
	exchangeList: [
		{ name: 'binance', koName: '바이낸스', referralCode: '' },
		{ name: 'bybit', koName: '바이비트', referralCode: '63326' },
		{ name: 'bitget', koName: '비트겟', referralCode: '' },
		{ name: 'okx', koName: 'OKX', referralCode: '' },
		{ name: 'others', koName: '그 외 다른 거래소', referralCode: '' },
	],
}))
