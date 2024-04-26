import React, { useEffect } from 'react'
import './App.css'

import { useProgressStore } from './store/progressStore'

import Starting from './components/starting/starting.component'
import ProgressIndicator from './components/progress-indicator/progress-indicator.component'
import RegistrationBody from './components/registration-body/registration-body.component'
import GetHelp from './components/get-help/get-help.component'
import Ending from './components/ending/ending.component'
import Footer from './components/footer/footer.component'
import Spinner from './components/spinner/spinner.component'
import Success from './components/success/success.component'

function App() {
	const progress = useProgressStore((state) => state.progress)
	const exchangeSelectStep = useProgressStore(
		(state) => state.exchangeSelectStep,
	)
	const requestStatus = useProgressStore((state) => state.requestStatus)

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'auto' })
	}, [progress, exchangeSelectStep, requestStatus])

	return (
		<div className="App">
			{requestStatus === 'loading' ? <Spinner /> : null}
			{requestStatus === 'success' ? <Success /> : null}
			<div id="body-container">
				{progress <= 0 ? <Starting /> : null}
				{progress < 6 && progress > 0 ? (
					<>
						<ProgressIndicator />
						<RegistrationBody />
						<GetHelp />
					</>
				) : null}
				{progress >= 6 ? <Ending /> : null}
			</div>
			<Footer />
		</div>
	)
}

export default App
