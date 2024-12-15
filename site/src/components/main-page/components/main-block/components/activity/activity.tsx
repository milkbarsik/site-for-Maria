import React from "react";
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
import NavIntoBlock from "../nav-into-block";

const Activity = () => {

	const sectionTitul = React.useRef<HTMLDivElement>(null);
	const section2016 = React.useRef<HTMLDivElement>(null);
	const section2017 = React.useRef<HTMLDivElement>(null);
	const section2018 = React.useRef<HTMLDivElement>(null);
	const section2019 = React.useRef<HTMLDivElement>(null);
	const section2020 = React.useRef<HTMLDivElement>(null);
	const section2021 = React.useRef<HTMLDivElement>(null);
	const section2022 = React.useRef<HTMLDivElement>(null);
	const section2023 = React.useRef<HTMLDivElement>(null);
	const section2024 = React.useRef<HTMLDivElement>(null);
	
	const refs: Record<string, React.RefObject<HTMLDivElement>> = {
		sectionTitul,
		section2016,
		section2017,
		section2018,
		section2019,
		section2020,
		section2021,
		section2022,
		section2023,
		section2024,
	};

	const titles: Record<string, string> = {
		sectionTitul: "В начало",
		section2016: "2016-2017",
		section2017: "2017-2018",
		section2018: "2018-2019",
		section2019: "2019-2020",
		section2020: "2020-2021",
		section2021: "2021-2022",
		section2022: "2022-2023",
		section2023: "2023-2024",
		section2024: "2024-2025",
	}
	
	const scrollToSection = (refLink: React.RefObject<HTMLElement>) => {
		refLink.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className={styles.wrapper} ref={refs.sectionTitul}>
			<div className={styles.content}>
				<header>
					<h1>Деятельность по развитию обучающихся</h1>
					<Myimage url={titul} height={'auto'} width={'100%'} />
				</header>
				<SectionTitul/>
				<Section2016 propRef={refs.section2016} />
				<Section2017 propRef={refs.section2017} />
				<Section2018 propRef={refs.section2018} />
				<Section2019 propRef={refs.section2019} />
				<Section2020 propRef={refs.section2020} />
				<Section2021 propRef={refs.section2021} />
				<Section2022 propRef={refs.section2022} />
				<Section2023 propRef={refs.section2023} />
				<Section2024 propRef={refs.section2024}/>
			</div>
			<NavIntoBlock foo={scrollToSection} refs={refs} titles={titles}/>
		</div>
	)
}

export default Activity;