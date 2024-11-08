import { FC } from "react";
import styles from './education.module.css';
import Myimage from "../../../../../../assets/ui/image";
import image from 'assets/education/diplom.jpg';

const Education:FC = () => {

	return (
		<div className={styles.wrapper}>
			<h1>Образование</h1>
			<Myimage 
				url={image}
				position="center"
				size="100% 100%"
				height="auto"
				width="100%"
			/>
			<p>
				В 2011 году закончила с отличием Московский государственный областной университет, 
				присуждена квалификация "Филолог. Преподаватель по специальности Филология".
			</p>
			<p>
				В 2014 году в Московском государственном областном университете закончила 
				аспирантуру на кафедре стилистики русского языка, культуры речи и риторики.
			</p>
		</div>
	)
}

export default Education;