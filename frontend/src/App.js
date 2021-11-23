import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer'; 
const App = () => {
	return <div>
<Header/>
    <Main />
	<Dashboard/>
<Footer/>
	</div>
};

export default App;
