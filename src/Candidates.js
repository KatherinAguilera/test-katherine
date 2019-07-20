import React, { Component } from 'react';
import Bar from './Bar';

class Candidates extends Component {
	constructor(props) {
		super(props);
		this.state = {
			percentUp: parseFloat(this.props.percentUp) || 0,
			voteEnabled: true
		}
	}

	handleChange = () => {
		this.setState((state) => {
			let newValue = state.percentUp + 2;
			if(newValue > 100) {
				newValue = 100;
			}
			if(newValue < 0) {
				newValue = 0;
			}
			console.log('newValue:', newValue);
			return {
				percentUp: newValue
			}
		})
	}
	render() {
		const datesStyle = {
			backgroundImage: 'url(' + this.props.image + ')',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			height: '100%',
			width: '100%',
		};
		const isDisabled = this.state.percentUp >= 100
		return (
			<section className="person" >
				<div style={datesStyle} >
				<div className="description">
						<div className="name">
							<h3 className="text">{this.props.name || 'Kanye West'}</h3>
							<p className="text">
								<strong>1 month ago</strong> in business
							</p>
							<p className="text-p">
								Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.
							</p>
							<div className="votes-count">
								<div className="">
									<i class="far fa-thumbs-up"></i>
								</div>
								<div className="">
									<i class="far fa-thumbs-down"></i>
								</div>
								<button
									type="button"
									className="btn"
									disabled={isDisabled}
									href="/"
									onClick={this.handleChange}
								>
									Vote Now {this.isDisabled}
								</button>
							</div>
						</div>
				</div>
				<Bar
							name={this.props.name}
							percentUp={this.state.percentUp}
				/>
				</div>
			</section>
			);
		}
	}

	export default Candidates;
