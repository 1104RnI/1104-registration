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
	referral: boolean
	uid: string
	assetManagement: string
}

export type Exchange = {
	name: string
	koName: string
	referralCode: string
	url: string
}

export interface ExchangeDataState {
	defaultExchange: Exchange['name']
	exchangeList: Exchange[]
}

export type AssetOption = {
	title: string
	value: string
}

export interface AssetOptionState {
	optionList: AssetOption[]
}

export interface AnimationState {
	animationProps: {
		initial: { opacity: number }
		animate: { opacity: number }
		exit: { opacity: number }
		transition: { duration: number }
	}
}

type UserDataAction = {
	setUserData: (state: Partial<UserDataState>) => void
	updateUserData: (field: string, value: string | boolean) => void
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
		referral: false,
		uid: '',
		assetManagement: '',
		setUserData: (state) => set((prevState) => ({ ...prevState, ...state })),
		updateUserData: (field, value) =>
			set((state) => ({
				...state,
				[field]: value,
			})),
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
	defaultExchange: 'bybit',
	exchangeList: [
		{ name: 'binance', koName: '바이낸스', referralCode: '', url: '' },
		{
			name: 'bybit',
			koName: '바이비트',
			referralCode: '63326',
			url: 'https://www.bybit.com/en/sign-up?affiliate_id=63326&group_id=0&group_type=1',
		},
		{ name: 'bitget', koName: '비트겟', referralCode: '', url: '' },
		{ name: 'okx', koName: 'OKX', referralCode: '', url: '' },
		{ name: 'others', koName: '그 외 다른 거래소', referralCode: '', url: '' },
	],
}))

export const useAssetOptionsStore = create<AssetOptionState>((set) => ({
	optionList: [
		{ title: '2,000만 원', value: '2000' },
		{ title: '1,000만 원', value: '1000' },
		{ title: '400만 원', value: '400' },
		{ title: '100만 원', value: '100' },
	],
}))

export const useAnimationStore = create<AnimationState>((set) => ({
	animationProps: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: 0.75 },
	},
}))
