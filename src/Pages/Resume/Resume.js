import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
        return (
            <div>
                <div className="section mt-0">
		            <h1 className="title title--h1 title__separate">Resume</h1>
				</div>
				
				<div className="section">
					<h2 className="title title--h2"><img className="title-icon" src="assets/icons/icon-education.svg" alt="" /> Education</h2>
					<div className="timeline">
						<article className="timeline__item">
							<h5 className="title title--h3 timeline__title">Dakhil</h5>
							<span className="timeline__period">2010 — 2011</span>
							<p className="timeline__description">Muradpur Islamia Alim Madrasha, Dhaka</p>
						</article>
                                        
						<article className="timeline__item">
							<h5 className="title title--h3 timeline__title">Alim</h5>
							<span className="timeline__period">2012 — 2013</span>
							<p className="timeline__description">Tamirul Millat Kamil Madrasha, Dhaka</p>
						</article>

						<article className="timeline__item">
							<h5 className="title title--h3 timeline__title">Fazil</h5>
							<span className="timeline__period">2014 — 2015</span>
							<p className="timeline__description">Tamirul Millat Kamil Madrasha, Dhaka</p>
						</article>

						<article className="timeline__item">
							<h5 className="title title--h3 timeline__title">Kamil</h5>
							<span className="timeline__period">2018 — 2019</span>
							<p className="timeline__description">Tamirul Millat Kamil Madrasha, Dhaka</p>
						</article>
                                        
						<article className="timeline__item">
							<h5 className="title title--h3 timeline__title">BSC in Computer Science and Engineering</h5>
							<span className="timeline__period">2014 — 2015</span>
							<p className="timeline__description">Bangladesh Institute of Science And Technology (BIST).</p>
						</article>
					</div>	
                </div>
				
				<div className="section">
					<h2 className="title title--h2"><img className="title-icon" src="assets/icons/icon-experience.svg" alt="" /> Experience</h2>
					<div className="timeline">
						<article className="timeline__item">
							<h5 className="title title--h3 timeline__title">Software Designer &amp; Developer</h5>
							<span className="timeline__period">2016-2017</span>
							<p className="timeline__description">Expert It, Mirpur, Dhaka</p>
						</article>
                                        
						<article className="timeline__item">
							<h5 className="title title--h3 timeline__title">Software Designer &amp; Developer </h5>
							<span className="timeline__period">2018 — 2019</span>
							<p className="timeline__description">Creative Shaper, Dhanmondi, Dhaka</p>
						</article>

						<article className="timeline__item">
							<h5 className="title title--h3 timeline__title">Former Web Developer &amp; Trainer</h5>
							<span className="timeline__period">2018 — present</span>
							<p className="timeline__description">Earth Face It Solution.</p>
						</article>

						<article className="timeline__item">
							<h5 className="title title--h3 timeline__title">Sr. Programmer &amp; Project Manager</h5>
							<span className="timeline__period">2020 — present</span>
							<p className="timeline__description">HSBLCO Solution, Mirpur, Dhaka</p>
						</article>
					</div>
				</div>
						
            </div>
        )
    }
}
