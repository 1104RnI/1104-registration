import React from 'react'
import './App.css'

import ProgressIndicator from './components/progress-indicator/progress-indicator.component'
import RegistrationBody from './components/registration-body/registration-body.component'
import GetHelp from './components/get-help/get-help.component'

function App() {
	return (
		<div className="App">
			<div id="body-container">
				<ProgressIndicator />
				<RegistrationBody />
				<GetHelp />
			</div>
		</div>
	)
}

export default App
