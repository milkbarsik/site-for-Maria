import { FC } from "react";
import { Tprops } from "../activity";

const Section2017:FC<Tprops> = ( {propRef} ) => {
	return (
			<section ref = {propRef}>
				<h2>2017-2018 учебный год</h2>
				<div className="content_wrapper">
					<ol>
						<li>
							<i>Уровень образовательной организации.</i> Всероссийский конкурс юных 
							чтецов «Живая классика», 4 участника.
						</li>
						<li>
							<i>Муниципальный уровень.</i> Открытый городской фестиваль детского 
							творчества «Пущинская весна-2018» в номинации «Художественное слово», 7 участников.
						</li>
						<li>
							<i>Региональный уровень.</i> Конкурс сочинений для детей с неродным 
							русским языком «Моё Отечество», 1 участник. Дистанционный конкурс, 
							проводимый Ресурсным центром русского языка МГОУ. 
						</li>
						<li>
							<i>Всероссийский уровень.</i> Конкурс эссе «Мой Гитис. Моя Россия», 
							7 лауреатов. Перед награждением студенты ГИТИСа-будущие актеры 
							устроили для детей представление-квест с интересными заданиями. 
						</li>
						<li>
							<i>Всероссийский уровень.</i> Детский творческий конкурс «Зеленый луч 
							звезды Есенина», 1 победитель (диплом 1 степени). Торжественное 
							награждение состоялось в день рождения поэта в музее его имени. 
							Перед награждением школьники посмотрели два фильма о жизни Сергея Есенина, 
							посмотрели выставку картин, посвященную поэту. Победителям после награждения 
							необходимо было показать себя: кто-то читал любимые стихи, кто-то пел, кто-то 
							танцевал, кто-то просто рассказал о себе и своих увлечениях. 
							Помимо грамоты дети получили набор подарков.
						</li>
						<li>
							<i>Международный уровень.</i> Международная литературная премия им. В.В.Бианки, 
							1 участник. Дистанционный конкурс.
						</li>
					</ol>
				</div>
			</section>
	)
}

export default Section2017;