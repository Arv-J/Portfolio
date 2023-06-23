import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Internships"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./Kabayan.jpg"
								className="work-image"
							/>
							<div className="work-title">Kabayan Broadband</div>
							<div className="work-subtitle">
								I.T Support
							</div>
							<div className="work-duration">February 2023 - May 2023</div>
						</div>

						<div className="work">
							<img
								src="./Protech.jpg"
								className="work-image"
							/>
							<div className="work-title">Protech</div>
							<div className="work-subtitle">
								Computer Technician
							</div>
							<div className="work-duration">August 2018</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
