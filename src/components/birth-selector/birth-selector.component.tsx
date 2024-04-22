import { ChangeEvent } from 'react'

import { useUserDataStore } from '../../store/dataStore'

import { BirthSelectorContainer } from './birth-selector.styles'

import Select from '../selector/selector.component'

export default function BirthSelector() {
	const birth = useUserDataStore((state) => state.personalInfo.birth)
	const updatePersonalInfoBirth = useUserDataStore(
		(state) => state.updatePersonalInfoBirth,
	)

	const currentYear = new Date().getFullYear()
	const startYear = currentYear - 90
	const endYear = currentYear - 19

	const yearOptions = Array.from(
		{ length: endYear - startYear + 1 },
		(_, index) => endYear - index,
	)
	const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1)

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectValue = e.target.value
		const selectName = e.target.name

		updatePersonalInfoBirth(selectName, selectValue)
	}

	return (
		<BirthSelectorContainer>
			<Select
				name="year"
				value={birth.year}
				handleChange={handleChange}
				placeholder="태어난 년도 선택"
				// isValid
				options={yearOptions}
				unit="년"
			/>
			<Select
				name="month"
				value={birth.month}
				handleChange={handleChange}
				placeholder="태어난 달 선택"
				// isValid
				options={monthOptions}
				unit="월"
			/>
		</BirthSelectorContainer>
	)
}
