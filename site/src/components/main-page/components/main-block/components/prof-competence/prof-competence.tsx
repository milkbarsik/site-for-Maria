import { FC } from "react";
import styles from './prof-competence.module.css';
import Myimage from "../../../../../../assets/ui/image";
import titul from 'assets/prof-competence/titul.jpg';
import jpg1 from 'assets/prof-competence/1.jpg';
import jpg2 from 'assets/prof-competence/2.jpg';


const ProfCompetence:FC = () => {

	return (
		<div className={styles.wrapper}>
			<h1>Профессиональная компетентность</h1>
			<Myimage url={titul} width="auto" height="80vh" />
			<p>
				Ежегодно прохожу исследование компетенций учителя по предмету - 
				русскому языку или литературе. Последнее тестирование по литературе 
				состоялось 7 февраля 2024 года, в результате мной было набрано 76%, 
				что соответствует повышенному уровню.
			</p>
			<Myimage url={jpg1} width="80%" height="auto" />
			<Myimage url={jpg2} width="80%" height="auto" />
		</div>
	)
}

export default ProfCompetence;