import React from 'react'
import './App.css'

import EmailCheck from './components/email-check/email-check.component'
import GetHelp from './components/get-help/get-help.component'

function App() {
	return (
		<div className="App">
			<div id="body-container">
				<EmailCheck />
				<GetHelp />
			</div>
		</div>
	)
}

export default App
