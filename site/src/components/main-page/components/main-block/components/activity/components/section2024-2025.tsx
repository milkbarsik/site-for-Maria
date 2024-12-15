import { FC } from "react";
import Pdf from "../../../../../../../assets/ui/pdf";
import Myimage from "../../../../../../../assets/ui/image";

import pdf1 from 'assets/activity/2024-2025/pdf1.pdf';
import pdf2 from 'assets/activity/2024-2025/pdf2.pdf';
import pdf3 from 'assets/activity/2024-2025/pdf3.pdf';
import pdf4 from 'assets/activity/2024-2025/pdf4.pdf';
import jpg3 from 'assets/activity/2024-2025/jpg3.jpg';

import { Tprops } from "../activity";

const Section2024:FC<Tprops> = ( {propRef} ) => {
	return (
			<section ref={propRef}>
				<h2>2024-2025 учебный год</h2>
				<div className="content_wrapper">
					<ol>
						<li>
							<i>Региональный уровень.</i> Региональная литературная викторина, 5 участников (5-8 классы - стр. 66-67, 9-11 классы - стр. 17, 23, 42).
							<Pdf src={pdf1} width={'100%'} height={'100vh'} />
							<Pdf src={pdf2} width={'100%'} height={'100vh'} />
						</li>
						<li>
							<i>Региональный уровень.</i> Региональная викторина “Трудный экзамен”, 1 призер, 7 участников (5-7 классы - стр. 9, 20, 26; 10-11 классы - стр. 1, 7, 8, 10, 12).
							<Pdf src={pdf3} width={'100%'} height={'100vh'} />
							<Pdf src={pdf4} width={'100%'} height={'100vh'} />
						</li>
						<li>
							<i>Муниципальный уровень.</i> Межрегиональный писательский конкурс для обучающихся по программам общего образования (номинация “Проза”), 2 участника, 1 победитель.
							<Myimage url={jpg3} width="70%" height="auto"/>
						</li>
					</ol>
				</div>
			</section>
	)
}

export default Section2024;