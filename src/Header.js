import React from 'react';
import Menu from './Menu';
const Header = () =>{
		return (
			<section className="container-hero">
				<div className="header">
					<h1>Rule of Thumb.</h1>
					<div className="menu">
							<Menu />
					</div>
				</div>
				<div className="votos">
				<div className="opinion">
					<p>Whats your opinion on</p>
					<h2>Pope Francis</h2>
					<p> He's talking tough on clergy sexual abuse, but is he just another papal pervert protector?
						(thumbs down) or a true peadophile punishing pontiff? (thumbs up)
					</p>
					<a href="#Home">More information</a>
					<p>Whats Your Verdict?</p>
				</div>
				<div className="icons">
						<div className="like">
						<i class="far fa-thumbs-up"></i>
						</div>
						<div className="dislike">
						<i class="far fa-thumbs-down"></i>
						</div>
					</div>
				</div>
				<div className="info">
					Closing in <strong>22 days</strong>
				</div>
			</section>
		);
	}
export default Header;
