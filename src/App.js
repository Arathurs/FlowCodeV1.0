import React from 'react';
import './App.css';
import { AppErrorBoundary } from './components/errors/AppErrorBoundary';
import { FlowCodeContainer } from './components/FlowCodeContainer';


function App () {
	
	return ( 
	  <AppErrorBoundary>
	    <FlowCodeContainer />
	  </ AppErrorBoundary>
	);
}

export default App;
