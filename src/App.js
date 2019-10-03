import React from 'react';
import logo from './logo.svg';
import Web3 from 'web3';
import './App.css';

const web3 = new Web3(Web3.givenProvider);

function App() {
	return (
		<div>
			<button onClick={() => web3.eth.getBlockNumber().then(res => console.log(res))}>
				Test button
			</button>
		</div>
  );
}

export default App;
