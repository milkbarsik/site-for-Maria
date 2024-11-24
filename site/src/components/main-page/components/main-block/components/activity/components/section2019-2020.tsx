import { FC } from "react";
import Pdf from "../../../../../../../assets/ui/pdf";
import Myimage from "../../../../../../../assets/ui/image";
import { Tprops } from "../activity";

import pdf1 from 'assets/activity/2019-2020/pdf1a.pdf';
import jpgb1 from 'assets/activity/2019-2020/jpg1b.jpg';
import jpg2 from 'assets/activity/2019-2020/jpg2.jpg';
import jpg3a from 'assets/activity/2019-2020/jpg3a.jpg';
import jpg3b from 'assets/activity/2019-2020/jpg3b.jpg';
import pdf4a from 'assets/activity/2019-2020/pdf4a.pdf';
import pdf4b from 'assets/activity/2019-2020/pdf4b.pdf';
import jpg5 from 'assets/activity/2019-2020/jpg5.jpg';

const Section2019:FC<Tprops> = ( {propRef} ) => {
	return (
			<section ref={propRef}>
				<h2>2019-2020 учебный год</h2>
				<div className="content_wrapper">
					<ol>
						<li>
							<i>Уровень образовательной организации.</i> 
							Всероссийский конкурс юных чтецов "Живая классика" 2020, 
							1 победитель, 4 участника.
							<Pdf src={pdf1} width={'100%'} height={'100vh'} />
							<Myimage url={jpgb1} width={'70%'} height={'auto'} />
						</li>
						<li>
							<i>Муниципальный уровень.</i> Всероссийский конкурс “Память сильнее времени”, 
							1 победитель.
							<Myimage url={jpg2} width={'70%'} height={'auto'} />
						</li>
						<li>
							<i>Муниципальный уровень.</i> XV открытый конкурс художественного слова, 
							посвященный Дню Памяти А.С. Пушкина "На берегу Лопасни", 2020 - 1 участник, 1 призер.
							<Myimage url={jpg3a} width={'70%'} height={'auto'} />
							<Myimage url={jpg3b} width={'70%'} height={'auto'} />
						</li>
						<li>
							<i>Международный уровень.</i> I Международный творческий литературный конкурс "Проба пера" в рамках проекта "Ахматовский март. 
							Ахматовские чтения", 2020 - 4 участника, 2 победителя (дипломы I и III степени).
							<Pdf src={pdf4a} width={'100%'} height={'100vh'} />
							<Pdf src={pdf4b} width={'100%'} height={'100vh'} />
						</li>
						<li>
							<i>Международный уровень.</i> Международный дистанционный конкурс эссе среди российских соотечественников 
							"Великая Отечественная война в истории моей семьи", 1 участник.
							<Myimage url={jpg5} width={'70%'} height={'auto'} />
						</li>
					</ol>
				</div>
			</section>
	)
}

export default Section2019;