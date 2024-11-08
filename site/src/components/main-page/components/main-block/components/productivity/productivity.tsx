import { FC } from "react";
import styles from './productivity.module.css';
import Myimage from "../../../../../../assets/ui/image";
import tituljpg from 'assets/productivity/titul.jpg';
import rusTable from 'assets/productivity/rustable.png';
import rusGraphic from 'assets/productivity/rusgraphic.png'

const Productivity:FC = () => {

	return (
		<div className={styles.wrapper}>
			<h1>Продуктивность образовательной деятельности</h1>
			<Myimage 
				url={tituljpg}
				position="center"
				size="contain"
				height="calc((1vh + 1vw)*25)"
				width="auto"
			/>
			<p>
				Начиная с 2019-2020 учебного года, я продемонстрировала 
				следующие результаты освоения обучающимися образовательных программ 
				по итогам мониторингов, проводимых организацией (общеобразовательная школа): 
			</p>
			<p>
				<ul>
					<li>
						средний уровень качества знаний по русскому языку (59%);
							<Myimage 
								url={rusTable}
								position="center"
								size="cover"
								height="auto"
								width="100%"
							/>
							<Myimage 
								url={rusGraphic}
								position="center"
								size="cover"
								height="auto"
								width="100%"
							/>
					</li>
				</ul>
			</p>
		</div>
	)
}

export default Productivity;