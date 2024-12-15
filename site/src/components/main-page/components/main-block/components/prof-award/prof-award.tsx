import styles from './prof-award.module.css'
import Myimage from "../../../../../../assets/ui/image";
import titul from 'assets/prof-award/titul.jpg';
import { arr, regionpAwards, municipAwards, orgAwards, otherAwards } from "./constants";
import NavIntoBlock from "../nav-into-block";
import { useRef } from 'react';


const ProfAward = () => {

	const renderImages = (imageArr: arr[]) => {
		return imageArr.map((el) => {
			return <Myimage url={el.Component} width="80%" height="auto" />
		})
	}


	const reglvl = useRef<HTMLLIElement>(null);
	const muniplvl = useRef<HTMLLIElement>(null);
	const orglvl = useRef<HTMLLIElement>(null);
	const other = useRef<HTMLLIElement>(null);
	
	const refs: Record<string, React.RefObject<HTMLLIElement>> = {
		reglvl,
		muniplvl,
		orglvl,
		other,
	};

	const titles: Record<string, string> = {
		reglvl: "Региональный уровень",
		muniplvl: "Муниципальный уровень",
		orglvl: "Уровень образовательной организации",
		other: "Другие награды",
	}
	
	const scrollToSection = (refLink: React.RefObject<HTMLDivElement | HTMLLIElement>) => {
		refLink.current?.scrollIntoView({ behavior: 'smooth' });
	};


	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<h1>Профессиональные награды</h1>
				<Myimage url={titul} width="auto" height="80vh" />
				<p>
					Моя профессиональная деятельность не раз была отмечена 
					профессиональными наградами различных уровней.
				</p>
				<div className={styles.contentWrapper}>
					<ul>
						<li ref={reglvl}>
							<p>Региональный уровень</p>
							{renderImages(regionpAwards)}
						</li>
						<li ref={muniplvl}>
							<p>Муниципальный уровень</p>
							{renderImages(municipAwards)}
						</li>
						<li ref={orglvl}>
							<p>Уровень образовательной организации</p>
							{renderImages(orgAwards)}
						</li>
						<li ref={other}>
							<p>Другие награды</p>
							{renderImages(otherAwards)}
						</li>
					</ul>
				</div>
			</div>
			<NavIntoBlock foo={scrollToSection} refs={refs} titles={titles} />
		</div>
	)
}

export default ProfAward;