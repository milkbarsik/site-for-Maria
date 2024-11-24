import { FC } from "react";
import Pdf from "../../../../../../../assets/ui/pdf";
import Myimage from "../../../../../../../assets/ui/image";
import { Tprops } from "../activity";

import jpg3 from 'assets/activity/2023-2024/jpg3.jpg';
import jpg5 from 'assets/activity/2023-2024/jpg5.jpeg';
import pdf1 from 'assets/activity/2023-2024/pdf1.pdf';
import pdf2 from 'assets/activity/2023-2024/pdf2.pdf';
import pdf4 from 'assets/activity/2023-2024/pdf4.pdf';

const Section2023:FC<Tprops> = ( {propRef} ) => {
	return (
			<section ref={propRef}>
				<h2>2023-2024 учебный год</h2>
				<div className="content_wrapper">
					<ol>
						<li>
							<i>Муниципальный уровень.</i> Олимпиада союзного государства "Россия-Беларусь", 1 победитель.
							<Pdf src={pdf1} width={'100%'} height={'100vh'} />
						</li>
						<li>
							<i>Региональный уровень.</i> Олимпиада союзного государства "Россия-Беларусь", 1 участник.
							<Pdf src={pdf2} width={'100%'} height={'100vh'} />
						</li>
						<li>
							<i>Муниципальный уровень.</i> Открытый городской фестиваль детского творчества «Пущинская весна-2024» в номинации 
							«Художественное слово», 1 лауреат, 3 участника.
							<Myimage url={jpg3} width={'70%'} height={'auto'} />
						</li>
						<li>
							<i>Региональный уровень.</i> Всероссийский конкурс "Класс!!", 3 участника.
							<Pdf src={pdf4} width={'100%'} height={'100vh'} />
						</li>
						<li>
							<i>Региональный уровень.</i> V Международный творческий литературный конкурс 
							"Проба пера" в рамках конкурса "Ахматовский март", номинация "Проза", 1 призер II степени.
							<Myimage url={jpg5} width={'70%'} height={'auto'} />
						</li>
					</ol>
				</div>
			</section>
	)
}

export default Section2023;