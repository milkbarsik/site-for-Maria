import { FC } from "react";
import styles from './productivity.module.css';
import Myimage from "../../../../../../assets/ui/image";
import tituljpg from 'assets/productivity/titul.jpg';
import { rus, arr, lit } from "./constants";
import oge from 'assets/productivity/ОГЭ.png';
import ege from 'assets/productivity/ЕГЭ.png';
import vpr from 'assets/productivity/ВПР.png';

const render = (array: arr[]): any => {
	 	return array.map((el) => {
			console.log(el);
		return <Myimage url={el.Component} height={'auto'} width={ '100%'} />
	})
}

const Productivity:FC = () => {

	return (
		<div className={styles.wrapper}>
			<h1>Продуктивность образовательной деятельности</h1>
			<Myimage 
				url={tituljpg}
				height="auto"
				width="80%"
			/>
			<p>
				Начиная с 2019-2020 учебного года, я продемонстрировала 
				следующие результаты освоения обучающимися образовательных программ 
				по итогам мониторингов, проводимых организацией (общеобразовательная школа): 
			</p>
			<p>
				<ul>
					<li>
						<h3>средний уровень качества знаний по русскому языку (59%).</h3>
						{render(rus)}
					</li>
					<li>
						<h3>высокий уровень знаний по литературе (76%).</h3>
						{render(lit)}
					</li>
				</ul>
			</p>
			<p>
				Результаты освоения обучающимися образовательных программ по итогам мониторинга 
				системы образования:
			</p>
			<p>
				<ul>
					<li>
						результаты ОГЭ и ЕГЭ - высокий уровень с положительной динамикой.
						<Myimage url={oge} height={'auto'} width={'100%'} />
						<Myimage url={ege} height={'auto'} width={'100%'} />
					</li>
					<li>
						результаты ВПР - стабильно, динамика в рамках двух лет.
						<Myimage url={vpr} height={'auto'} width={'100%'} />
					</li>
				</ul>
			</p>
		</div>
	)
}

export default Productivity;