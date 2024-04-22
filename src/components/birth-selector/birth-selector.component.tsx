import { useState, ChangeEvent } from 'react'

import Select from '../select/select.component'

export default function BirthSelector() {
	const currentYear = new Date().getFullYear()
	const startYear = currentYear - 90
	const endYear = currentYear - 19

	const yearOptions = Array.from(
		{ length: endYear - startYear + 1 },
		(_, index) => startYear + index,
	)
	const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1)

	const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
		// setSelectedYear(e.target.value)
	}

	return (
		<div>
			<Select
				placeholder="태어난 년도"
				isValid
				options={yearOptions}
				unit="년"
			/>
			<Select
				placeholder="태어난 달"
				isValid
				options={monthOptions}
				unit="월"
			/>
			{/* <select value={selectedYear} onChange={handleYearChange}>
				<option value="">태어난 년도</option>
				{yearOptions.map((year) => (
					<option key={year} value={year}>
						{year}년
					</option>
				))}
			</select>
			<select value={selectedYear} onChange={handleYearChange}>
				<option value="">태어난 달</option>
				{monthOptions.map((month) => (
					<option key={month} value={String(month).padStart(2, '0')}>
						{month}월
					</option>
				))}
			</select> */}
		</div>
	)
}
