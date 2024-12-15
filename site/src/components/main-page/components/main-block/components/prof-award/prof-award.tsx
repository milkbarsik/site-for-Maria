import { FC } from "react";
import styles from './prof-award.module.css'
import Myimage from "../../../../../../assets/ui/image";
import titul from 'assets/prof-award/titul.jpg';
import { arr, regionpAwards, municipAwards, orgAwards, otherAwards } from "./constants";


const ProfAward:FC = () => {

	const renderImages = (imageArr: arr[]) => {
		return imageArr.map((el) => {
			return <Myimage url={el.Component} width="80%" height="auto" />
		})
	}

	return (
		<div className={styles.wrapper}>
			<h1>Профессиональные награды</h1>
			<Myimage url={titul} width="auto" height="80vh" />
			<p>
				Моя профессиональная деятельность не раз была отмечена 
				профессиональными наградами различных уровней.
			</p>
			<div className={styles.contentWrapper}>
				<ul>
					<li>
						<p>Региональный уровень</p>
						{renderImages(regionpAwards)}
					</li>
					<li>
						<p>Муниципальный уровень</p>
						{renderImages(municipAwards)}
					</li>
					<li>
						<p>Уровень образовательной организации</p>
						{renderImages(orgAwards)}
					</li>
					<li>
						<p>Другие награды</p>
						{renderImages(otherAwards)}
					</li>
				</ul>
			</div>
		</div>
	)
}

export default ProfAward;