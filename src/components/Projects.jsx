import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import '../scss/components/_projects.scss';
import projects from "../data/projects"



const Project = () => (
	<div>
		<div className="wrapper">
			
		</div>
		<Slider className="slider-wrapper">
			{projects.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<a className="button" target="_blank" href={item.userProfile}>{item.button}</a>
						
					</div>
				</div>
			))}
		</Slider>
	</div>
);

export default Project;
