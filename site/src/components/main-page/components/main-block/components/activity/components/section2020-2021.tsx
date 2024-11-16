import { FC } from "react";
import Myimage from "../../../../../../../assets/ui/image";
import Pdf from "../../../../../../../assets/ui/pdf";
import jpg2 from 'assets/activity/2020-2021/jpg2.jpg';
import jpg3 from 'assets/activity/2020-2021/jpg3.jpg';
import pdf4a from 'assets/activity/2020-2021/pdf4a.pdf';
import pdf4b from 'assets/activity/2020-2021/pdf4b.pdf';
const Section2020:FC = () => {
	return (
		<div>
			<section>
				<h2>2020-2021 учебный год</h2>
				<p>
					<ol>
						<li>
							<i>Муниципальный уровень.</i> Всероссийский конкурс сочинений "Без срока давности", 1 победитель.
						</li>
						<li>
							<i>Региональный уровень.</i> Всероссийский конкурс сочинений "Без срока давности", 1 участник.
							<Myimage url={jpg2} width={'70%'} height={'auto'} />
						</li>
						<li>
							<i>Муниципальный уровень.</i> Открытый городской фестиваль детского творчества «Пущинская весна-2021» в 
							номинации «Художественное слово», 1 участник.
							<Myimage url={jpg3} width={'70%'} height={'auto'} />
						</li>
						<li>
							<i>Международный уровень.</i> II Международный творческий литературный конкурс 
							"Проба пера" в рамках проекта "Ахматовский март. Ахматовские чтения", 2020 - 2 победителя (дипломы II и III степени).
							<Pdf src={pdf4a} width={'100%'} height={'100vh'} />
							<Pdf src={pdf4b} width={'100%'} height={'100vh'} />
						</li>
					</ol>
				</p>
			</section>
		</div>
	)
}

export default Section2020;