import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Candidates from './Candidates';
import Counted from './Counted';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<main>
					<Counted />
					<div className="voto">Votes</div>
					<section className="persons">
						<Candidates
								name="Kanye West"
								image="kanye-west.jpg"
								percentUp="64"
						/>
						<Candidates
							name="Mark Zuckerberg"
							image="mark-zuckerberg.jpg"
							percentUp="10"
						/>
						<Candidates
							name="Cristina Fernández de Kitchner"
							image="kristina-fernandez-de-kitchner.jpg"
							percentUp="4"
						/>
						<Candidates
							name="Malala Yousafzai"
							image="malala-yousafzai.jpg"
							percentUp="97"
						/>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
};

export default App;
