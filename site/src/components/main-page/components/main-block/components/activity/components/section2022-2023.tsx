import { FC } from "react";
import { Tprops } from "../activity";

import Myimage from "../../../../../../../assets/ui/image";
import Pdf from "../../../../../../../assets/ui/pdf";

import pdf1 from 'assets/activity/2022-2023/pdf1.pdf';
import pdf4a from 'assets/activity/2022-2023/pdf4a.pdf';
import pdf4b from 'assets/activity/2022-2023/pdf4b.pdf';
import pdf5 from 'assets/activity/2022-2023/pdf5.pdf';
import pdf6 from 'assets/activity/2022-2023/pdf6.pdf';
import pdf7 from 'assets/activity/2022-2023/pdf7.pdf';

import jpg2a from 'assets/activity/2022-2023/jpg2a.jpg';
import jpg2b from 'assets/activity/2022-2023/jpg2b.jpg';
import jpg3 from 'assets/activity/2022-2023/jpg3.jpg';
import jpg8a from 'assets/activity/2022-2023/jpg8a.jpeg';
import jpg8b from 'assets/activity/2022-2023/jpg8b.jpeg';
import jpg8v from 'assets/activity/2022-2023/jpg8v.jpeg';

const Section2022:FC<Tprops> = ( {propRef} ) => {
	return (
			<section ref={propRef}>
				<h2>2022-2023 учебный год</h2>
				<div className="content_wrapper">
					<ol>
						<li>
							<i>Муниципальный уровень.</i> Всероссийский конкурс сочинений, 1 призер (2 место).
							<Pdf src={pdf1} width={'100%'} height={'100vh'} />
						</li>
						<li>
							<i>Муниципальный уровень.</i> Открытый городской фестиваль детского творчества «Пущинская весна-2023» в номинации 
							«Художественное слово», 1 лауреат, 1 участник.
							<Myimage url={jpg2a} width={'70%'} height={'auto'} />
							<Myimage url={jpg2b} width={'70%'} height={'auto'} />
						</li>
						<li>
							<i>Всероссийский уровень.</i> Всероссийский конкурс сочинений - 2022 "Безопасный интернет", 1 участник.
							<Myimage url={jpg3} width={'70%'} height={'auto'} />
						</li>
						<li>
							<i>Всероссийский уровень.</i> Всероссийский конкурс "Императорский хештег", 2 лауреата.
							<Pdf src={pdf4a} width={'100%'} height={'100vh'} />
							<Pdf src={pdf4b} width={'100%'} height={'100vh'} />
						</li>
						<li>
							<i>Всероссийский уровень.</i> Всероссийский литературный конкурс "Класс!", 1 участник.
							<Pdf src={pdf5} width={'100%'} height={'100vh'} />
						</li>
						<li>
							<i>Всероссийский уровень.</i> Всероссийский конкурс сочинений о русской культуре на родном языке и о родной 
							культуре на русском языке, 1 призер (3 место).
							<Pdf src={pdf6} width={'100%'} height={'100vh'} />
						</li>
						<li>
							<i>Всероссийский уровень.</i> Всероссийская онлайн-олимпиада Учи.ру по русскому языку для учеников 1-9 классов, 1 победитель
							<Pdf src={pdf7} width={'100%'} height={'100vh'} />
						</li>
						<li>
							<i>Международный уровень.</i> IV Международный творческий литературный конкурс "Проба пера", 
							номинация "Проза", 2 участника, 1 призер 3 степени.
							<Myimage url={jpg8a} width={'70%'} height={'auto'} />
							<Myimage url={jpg8b} width={'70%'} height={'auto'} />
							<Myimage url={jpg8v} width={'70%'} height={'auto'} />
						</li>
					</ol>
				</div>
			</section>
	)
}

export default Section2022;