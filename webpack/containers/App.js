import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';

const styles = {
	filler: { height: '350px' },
	txt: { color: 'black' }
}



const App = ({ children }) => (
	<div>
		<Navbar />
		<Home />
  	  { children }
  	<Footer />
  </div>
)

export default App;
