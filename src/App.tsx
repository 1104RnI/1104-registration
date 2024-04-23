import React from 'react'
import './App.css'

import { useProgressStore } from './store/progressStore'

import ProgressIndicator from './components/progress-indicator/progress-indicator.component'
import RegistrationBody from './components/registration-body/registration-body.component'
import GetHelp from './components/get-help/get-help.component'
import Ending from './components/ending/ending.component'

function App() {
	const progress = useProgressStore((state) => state.progress)

	return (
		<div className="App">
			<div id="body-container">
				{progress < 6 ? (
					<>
						<ProgressIndicator />
						<RegistrationBody />
						<GetHelp />
					</>
				) : (
					<Ending />
				)}
			</div>
		</div>
	)
}

export default App
