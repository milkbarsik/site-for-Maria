import React, { FC } from "react";
import styles from './activity.module.css';
import Myimage from "../../../../../../assets/ui/image";
import titul from 'assets/activity/titul.jpeg';
import './activity.css'


import Section2016 from "./components/section2016-2017";
import Section2017 from "./components/section2017-2018";
import Section2018 from "./components/section2018-2019";
import Section2019 from "./components/section2019-2020";
import Section2020 from "./components/section2020-2021";
import Section2021 from "./components/section2021-2022";
import SectionTitul from "./components/sectionTitul";
import Section2022 from "./components/section2022-2023";
import Section2023 from "./components/section2023-2024";
import Section2024 from "./components/section2024-2025";
import NavIntoBlock from "./nav-into-block";



const Activity:FC = () => {

	const scrollToSection = () => {
		section2024.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const sectionTitul = React.useRef(null);
	const section2016 = React.useRef(null);
	const section2017 = React.useRef(null);
	const section2018 = React.useRef(null);
	const section2019 = React.useRef(null);
	const section2020 = React.useRef(null);
	const section2021 = React.useRef(null);
	const section2022 = React.useRef(null);
	const section2023 = React.useRef(null);
	const section2024 = React.useRef<HTMLElement>(null);

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<header>
					<h1>Деятельность по развитию обучающихся</h1>
					<Myimage url={titul} height={'auto'} width={'90%'} />
				</header>
				<SectionTitul />
				<Section2016 />
				<Section2017 />
				<Section2018 />
				<Section2019 />
				<Section2020 />
				<Section2021 />
				<Section2022 />
				<Section2023 />
				<Section2024 propRef={section2024}/>
			</div>
			<NavIntoBlock foo={scrollToSection} />
		</div>
	)
}

export default Activity;