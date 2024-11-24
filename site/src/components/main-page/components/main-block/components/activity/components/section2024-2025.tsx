import React, { FC } from "react";
import Pdf from "../../../../../../../assets/ui/pdf";

import pdf1 from 'assets/activity/2024-2025/pdf1.pdf';
import pdf2 from 'assets/activity/2024-2025/pdf2.pdf';
import pdf3 from 'assets/activity/2024-2025/pdf3.pdf';
import pdf4 from 'assets/activity/2024-2025/pdf4.pdf';

import { Tprops } from "../activity";

const Section2024:FC<Tprops> = ( {propRef} ) => {
	return (
			<section ref={propRef}>
				<h2>2024-2025 учебный год</h2>
				<div className="content_wrapper">
					<ol>
						<li>
							<i>Региональный уровень.</i> региональная литературная викторина, 5 участников.
							<Pdf src={pdf1} width={'100%'} height={'100vh'} />
							<Pdf src={pdf2} width={'100%'} height={'100vh'} />
						</li>
						<li>
							<i>Региональный уровень.</i> региональная викторина “Трудный экзамен”, 1 призер, 7 участников.
							<Pdf src={pdf3} width={'100%'} height={'100vh'} />
							<Pdf src={pdf4} width={'100%'} height={'100vh'} />
						</li>
					</ol>
				</div>
			</section>
	)
}

export default Section2024;