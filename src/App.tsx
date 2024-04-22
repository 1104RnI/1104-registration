import React from 'react'
import './App.css'

import ProgressIndicator from './components/progress-indicator/progress-indicator.component'
import EmailCheck from './components/email-check/email-check.component'
import GetHelp from './components/get-help/get-help.component'

function App() {
	return (
		<div className="App">
			<div id="body-container">
				<ProgressIndicator progress={3} />
				<EmailCheck />
				<GetHelp />
			</div>
		</div>
	)
}

export default App
