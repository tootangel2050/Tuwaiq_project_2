import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'; 
import Main from './components/main/Main';
import './main.css';
const App = () => {
	return <div>
<Header/>
    <Main />
<Footer/>
	</div>
};

export default App;
