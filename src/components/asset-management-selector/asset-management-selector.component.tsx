import TextArea from '../text-area/text-area.component'

import { AssetManagementSelectorContainer } from './asset-management-selector.styles'

export default function AssetManagementSelector() {
	return (
		<AssetManagementSelectorContainer>
			<TextArea
				title="맞춤형 자산설계 선택"
				text={['예상되는 초기 투자 자금의 규모를 선택해 주세요.']}
			/>
		</AssetManagementSelectorContainer>
	)
}
