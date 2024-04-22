import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from 'react'

export type ResolutionType = {
	isDesktop: boolean
	isTablet: boolean
	isMobile: boolean
}

export default function useResponsive() {
	const [resolution, setResolution] = useState<ResolutionType>({
		isDesktop: true,
		isTablet: false,
		isMobile: false,
	})

	const desktop: boolean = useMediaQuery({ query: '(min-width: 1200px)' })
	const tablet: boolean = useMediaQuery({
		query: '(min-width: 800px) and (max-width: 1199px)',
	})
	const mobile: boolean = useMediaQuery({ query: '(max-width: 799px)' })

	useEffect(() => {
		desktop &&
			setResolution({ isDesktop: true, isTablet: false, isMobile: false })
		tablet &&
			setResolution({ isDesktop: false, isTablet: true, isMobile: false })
		mobile &&
			setResolution({ isDesktop: false, isTablet: false, isMobile: true })
	}, [desktop, tablet, mobile])

	return resolution
}
