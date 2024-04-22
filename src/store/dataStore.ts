import { create } from 'zustand'

export type PersonalInfo = {
	name: string
	tel: string
	birth: string
}

export type Exchange = 'bybit' | 'binance' | 'bitget' | 'okx' | 'others' | ''

export interface UserDataState {
	personalInfo: PersonalInfo
	tradingViewID: string
	exchange: Exchange
	uid: string
}

type UserDataAction = {
	updatePersonalInfo: (personalInof: UserDataState['personalInfo']) => void
}

export const useUserDataStore = create<UserDataState & UserDataAction>(
	(set) => ({
		personalInfo: { name: '', tel: '', birth: '' },
		tradingViewID: '',
		exchange: '',
		uid: '',
		updatePersonalInfo: (personalInfo) =>
			set(() => ({ personalInfo: personalInfo })),
	}),
)
