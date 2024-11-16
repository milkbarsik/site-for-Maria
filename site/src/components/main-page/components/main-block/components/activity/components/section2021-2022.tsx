import { FC } from "react";
import Myimage from "../../../../../../../assets/ui/image";

import jpg1a from 'assets/activity/2021-2022/jpg1a.jpg';
import jpg1b from 'assets/activity/2021-2022/jpg1b.jpg';
import jpg1v from 'assets/activity/2021-2022/jpg1v.jpg';

import jpg3 from 'assets/activity/2021-2022/jpg3.jpg';

import jpg4a from 'assets/activity/2021-2022/jpg4a.jpg';
import jpg4b from 'assets/activity/2021-2022/jpg4b.jpg';
import jpg4v from 'assets/activity/2021-2022/jpg4v.jpg';
import jpg4g from 'assets/activity/2021-2022/jpg4g.jpg';

import rusBear1 from 'assets/activity/2021-2022/rusBear1.jpg';
import rusBear2 from 'assets/activity/2021-2022/rusBear2.jpg';
import rusBear3 from 'assets/activity/2021-2022/rusBear3.jpg';
import rusBear4 from 'assets/activity/2021-2022/rusBear4.jpg';
import rusBear5 from 'assets/activity/2021-2022/rusBear5.jpg';
import rusBear6 from 'assets/activity/2021-2022/rusBear6.jpg';
import rusBear7 from 'assets/activity/2021-2022/rusBear7.jpg';

const Section2021:FC = () => {
	return (
		<div>
			<section>
				<h2>2021-2022 учебный год</h2>
				<p>
					<ol>
						<li>
							<i>Уровень образовательной организации.</i> Конкурс сочинений "Моя будущая профессия", 3 победителя.
							<Myimage url={jpg1a} width={'70%'} height={'auto'} />
							<Myimage url={jpg1b} width={'70%'} height={'auto'} />
							<Myimage url={jpg1v} width={'70%'} height={'auto'} />
						</li>
						<li>
							<i>Муниципальный уровень.</i> Конкурс сочинений "Моя будущая профессия", 2 победителя.
						</li>
						<li>
							<i>Муниципальный уровень.</i> Всероссийский конкурс на лучшее сочинение о своей культуре на русском языке, 1 победитель.
							<Myimage url={jpg3} width={'70%'} height={'auto'} />
						</li>
						<li>
							<i>Муниципальный уровень.</i> Открытый городской фестиваль детского творчества «Пущинская весна-2022» в номинации «Художественное слово», 
							1 лауреат, 3 участника.
							<Myimage url={jpg4a} width={'70%'} height={'auto'} />
							<Myimage url={jpg4b} width={'70%'} height={'auto'} />
							<Myimage url={jpg4v} width={'70%'} height={'auto'} />
							<Myimage url={jpg4g} width={'70%'} height={'auto'} />
						</li>
						<li>
							Международный уровень. конкурс "Русский медвежонок - языкознание для всех" 2022 года, 
							13 участников, 1 призер (3 место среди 5х классов).
							<Myimage url={rusBear1} width={'70%'} height={'auto'} />
							<Myimage url={rusBear2} width={'70%'} height={'auto'} />
							<Myimage url={rusBear3} width={'70%'} height={'auto'} />
							<Myimage url={rusBear4} width={'70%'} height={'auto'} />
							<Myimage url={rusBear5} width={'70%'} height={'auto'} />
							<Myimage url={rusBear6} width={'70%'} height={'auto'} />
							<Myimage url={rusBear7} width={'70%'} height={'auto'} />
						</li>
					</ol>
				</p>
			</section>
		</div>
	)
}

export default Section2021;