import { FC } from "react";
import Myimage from "../../../../../../../assets/ui/image";

import olimp1 from 'assets/activity/olimp/olimp1.jpg';
import olimp2 from 'assets/activity/olimp/olimp2.jpg';
import olimp3 from 'assets/activity/olimp/olimp3.jpg';
import olimp4 from 'assets/activity/olimp/olimp4.jpg';
import olimp5 from 'assets/activity/olimp/olimp5.jpg';
import olimp6 from 'assets/activity/olimp/olimp6.jpg';
import olimp7 from 'assets/activity/olimp/olimp7.jpg';
import olimp8 from 'assets/activity/olimp/olimp8.jpg';


const SectionTitul:FC = () => {
	return (
			<section>
				<div className="content_wrapper">
					Поиск и поддержка талантливых детей - одно из основных направлений моей деятельности. 
					Я даю шанс попробовать себя в творчестве каждому ребёнку, 
					предлагаю им широкий список конкурсов, поддерживаю и подбадриваю.
				</div>
				<div className="content_wrapper">
					Результат - заинтересованность детей в творческих конкурсах сочинений, 
					большое количество участников и победителей конкурсов разных уровней. 
				</div>
				<div className="content_wrapper">
					Мои ученики ежегодно становятся победителями Всероссийской олимпиады 
					школьников по русскому языку и литературе на уровне образовательной организации, 
					а также на муниципальном уровне:
				</div>
				<div className="content_wrapper">
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
				</div>
				<div className="content_wrapper">
					Помимо олимпиад мои ученики принимают активное участие в самых различных конкурсах.
				</div>
			</section>
	)
}

export default SectionTitul;