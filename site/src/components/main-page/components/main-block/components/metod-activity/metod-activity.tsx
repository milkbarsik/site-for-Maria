import { FC } from "react";
import styles from './metod-activity.module.css';
import Myimage from "../../../../../../assets/ui/image";
import titul from "assets/metod-activity/titul.jpg";
import Pdf from "../../../../../../assets/ui/pdf";
import pdf1_1 from 'assets/metod-activity/1/Рабочая программа Литература 5 класс.pdf';
import pdf2_1 from 'assets/metod-activity/1/Рабочая программа Литература 9 класс.pdf';
import pdf3_1 from 'assets/metod-activity/1/Рабочая программа Русский язык 6 класс.pdf';
import pdf4_1 from 'assets/metod-activity/1/Рабочая программа Русский язык 7 класс.pdf';
import pdf5_1 from 'assets/metod-activity/1/Рабочая программа Русский язык 8 класс.pdf';
import pdf6_1 from 'assets/metod-activity/1/Рабочая программа Русский язык 10 класс.pdf';
import pdf7_1 from 'assets/metod-activity/1/Рабочая программа Русский язык 11 класс.pdf';

import pdf1_2 from 'assets/metod-activity/2/Сборник Педагогический поиск 2021.pdf';

import pdf1_3 from 'assets/metod-activity/3/Без срока давности №41 рот 03.02.2022 Жюри муниц.уровень.pdf';
import pdf2_3 from 'assets/metod-activity/3/ВКС жюри 2021 год.pdf';
import pdf3_3 from 'assets/metod-activity/3/ВКС о родной культуре жюри муниципального этапа.pdf';
import pdf4_3 from 'assets/metod-activity/3/ВСОШ жюри 2021 год.pdf';
import pdf5_3 from 'assets/metod-activity/3/Жюри Живая классика муниц 2023.pdf';
import pdf6_3 from 'assets/metod-activity/3/Жюри муниципального этапа олимпиад 2022.pdf';
import pdf7_3 from 'assets/metod-activity/3/Председатель комиссии по проверке итогового сочинения 2021 11 классы.pdf';
import pdf8_3 from 'assets/metod-activity/3/prikaz_110_ME_VSOSh.pdf';
import jpg1_3 from 'assets/metod-activity/3/эксперт ИС 2024.jpg';


const MetodActivity:FC = () => {
	
	return (
		<div className={styles.wrapper}>
			<h1>Методическая деятельность</h1>
			<Myimage url={titul} height={'auto'} width={'100%'} />
			<p>
				Как учитель высшей категории, я постоянно делюсь наработанным опытом, 
				результатами своей методической деятельности.
			</p>
			<div className={styles.contentWrapper}>
				<ol>
					<li>
						Как учитель-предметник, я ежегодно разрабатываю учебные программы 
						по предметам русский язык и литература.
						<Pdf src={pdf1_1} height="100vh" width="100%" />
						<Pdf src={pdf2_1} height="100vh" width="100%" />
						<Pdf src={pdf3_1} height="100vh" width="100%" />
						<Pdf src={pdf4_1} height="100vh" width="100%" />
						<Pdf src={pdf5_1} height="100vh" width="100%" />
						<Pdf src={pdf6_1} height="100vh" width="100%" />
						<Pdf src={pdf7_1} height="100vh" width="100%" />
					</li>
					<li>
						В 2021 году моя статья “Применение метода коллективного разума на 
						уроках литературы” была опубликована в сборнике “Педагогический поиск. 
						Выпуск 13”.
						<Pdf src={pdf1_2} height="100vh" width="100%" />
					</li>
					<li>
						Я являюсь бессменным членом жюри различных литературных конкурсов 
						муниципального уровня, председателем жюри по проверке Всероссийской 
						олимпиады школьников по русскому языку на муниципальном этапе, 
						экспертом по проверке итогового сочинения (изложения) в 11 классе и 
						итогового собеседования в 9 классе.
						<Pdf src={pdf1_3} height="100vh" width="100%" />
						<Pdf src={pdf2_3} height="100vh" width="100%" />
						<Pdf src={pdf3_3} height="100vh" width="100%" />
						<Pdf src={pdf4_3} height="100vh" width="100%" />
						<Pdf src={pdf5_3} height="100vh" width="100%" />
						<Pdf src={pdf6_3} height="100vh" width="100%" />
						<Pdf src={pdf7_3} height="100vh" width="100%" />
						<Pdf src={pdf8_3} height="100vh" width="100%" />
						<Myimage url={jpg1_3} width="100%" height="auto" />
					</li>
					<li>
						С 2017 года являюсь руководителем школьного методического объединения 
						учителей русского языка и литературы.
					</li>
				</ol>
			</div>
		</div>
	)
}

export default MetodActivity;