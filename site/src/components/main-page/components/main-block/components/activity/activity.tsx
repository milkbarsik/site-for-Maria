import { FC } from "react";
import styles from './activity.module.css';
import Myimage from "../../../../../../assets/ui/image";
import titul from 'assets/activity/titul.jpeg';


import olimp1 from 'assets/activity/olimp/olimp1.jpg';
import olimp2 from 'assets/activity/olimp/olimp2.jpg';
import olimp3 from 'assets/activity/olimp/olimp3.jpg';
import olimp4 from 'assets/activity/olimp/olimp4.jpg';
import olimp5 from 'assets/activity/olimp/olimp5.jpg';
import olimp6 from 'assets/activity/olimp/olimp6.jpg';
import olimp7 from 'assets/activity/olimp/olimp7.jpg';
import olimp8 from 'assets/activity/olimp/olimp8.jpg';


import Section2016 from "./components/section2016-2017";
import Section2017 from "./components/section2017-2018";
import Section2018 from "./components/section2018-2019";
import Section2019 from "./section2019-2020";
import Section2020 from "./components/section2020-2021";
import Section2021 from "./components/section2021-2022";



const Activity:FC = () => {

	return (

		<div className={styles.wrapper}>
			<header>
				<h1>Деятельность по развитию обучающихся</h1>
				<Myimage url={titul} height={'auto'} width={'90%'} />
			</header>
			<section>
				<p>
					Поиск и поддержка талантливых детей - одно из основных направлений моей деятельности. 
					Я даю шанс попробовать себя в творчестве каждому ребёнку, 
					предлагаю им широкий список конкурсов, поддерживаю и подбадриваю.
				</p>
				<p>
					Результат - заинтересованность детей в творческих конкурсах сочинений, 
					большое количество участников и победителей конкурсов разных уровней. 
				</p>
				<p>
					Мои ученики ежегодно становятся победителями Всероссийской олимпиады 
					школьников по русскому языку и литературе на уровне образовательной организации, 
					а также на муниципальном уровне:
				</p>
				<p>
				<ol>
					<li>
						В 2017-2018 учебном году - 1 победитель среди 7х классов по литературе;
					</li>
					<li>
						В 2018-2019 учебному году - 1 победитель и 3 призёра среди 7х классов по литературе.
					</li>
					<li>
						В 2019-2020 учебном году - 1 победитель и 1 призёр среди 9х классов по литературе.
						<Myimage url={olimp1} height={'auto'} width={'70%'} />
						<Myimage url={olimp2} height={'auto'} width={'70%'} />
					</li>
					<li>
						В 2020-2021 учебном году - 1 победитель среди 8х классов по литературе, 
						1 призёр среди 8х классов по русскому языку.
						<Myimage url={olimp3} height={'auto'} width={'70%'} />
						<Myimage url={olimp4} height={'auto'} width={'70%'} />
					</li>
					<li>
						В 2022-2023 году - 1 победитель и 1 призер среди 11х классов по русскому языку, 
						1 победитель муниципального этапа и призер среди 11х классов регионального 
						этапа по литературе.
						<Myimage url={olimp5} height={'auto'} width={'70%'} />
						<Myimage url={olimp6} height={'auto'} width={'70%'} />
						<Myimage url={olimp7} height={'auto'} width={'70%'} />
						<Myimage url={olimp8} height={'auto'} width={'70%'} />
					</li>
				</ol>
				</p>
				<p>
					Помимо олимпиад мои ученики принимают активное участие в самых различных конкурсах.
				</p>
			</section>
			<Section2016 />
			<Section2017 />
			<Section2018 />
			<Section2019 />
			<Section2020 />
			<Section2021 />
		</div>
	)
}

export default Activity;