import { useState, ChangeEvent } from 'react'

export default function YearSelector() {
	const [selectedYear, setSelectedYear] = useState('')

	const currentYear = new Date().getFullYear()

	const startYear = currentYear - 90
	const endYear = currentYear - 19
	const yearOptions = Array.from(
		{ length: endYear - startYear + 1 },
		(_, index) => startYear + index,
	)

	const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelectedYear(e.target.value)
	}

	return (
		<select value={selectedYear} onChange={handleYearChange}>
			<option value="">선택하세요</option>
			{yearOptions.map((year) => (
				<option key={year} value={year}>
					{year}
				</option>
			))}
		</select>
	)
}
