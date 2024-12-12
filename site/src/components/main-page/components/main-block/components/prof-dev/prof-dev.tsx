import { FC } from "react";
import styles from './prof-dev.module.css';
import Myimage from "../../../../../../assets/ui/image";
import titul from 'assets/prof-dev/titul.jpg';
import jpg1 from 'assets/prof-dev/1.jpg';
import jpg2 from 'assets/prof-dev/2.jpg';
import jpg3 from 'assets/prof-dev/3.jpg';
import jpg4 from 'assets/prof-dev/4.jpg';
import jpg5 from 'assets/prof-dev/5.jpg';
import jpg6 from 'assets/prof-dev/6.jpg';
import jpg7 from 'assets/prof-dev/7.jpg';
import jpg8 from 'assets/prof-dev/8.jpg';
import jpg9 from 'assets/prof-dev/9.jpg';
import jpg10 from 'assets/prof-dev/10.jpg';
import jpg11 from 'assets/prof-dev/11.jpg';
import jpg12 from 'assets/prof-dev/12.jpg';
import jpg13 from 'assets/prof-dev/13.jpg';
import jpg14 from 'assets/prof-dev/14.jpg';


const ProfDev:FC = () => {

	return (
		<div className={styles.wrapper}>
			<h1>Повышение квалификации</h1>
			<Myimage url={titul} width="100%" height="auto" />
			<p>
				Я считаю, что учитель должен постоянно повышать свой профессиональный уровень, 
				если он хочет добиться высокого качества знаний у детей. 
				Поэтому я периодически прохожу курсы повышения квалификации:
			</p>
			<div className={styles.contentWrapper}>
				<ol>
					<li>
						Курс «Развитие универсальных учебных действий обучающихся при использовании 
						проектной технологии обучения» МБУ ДПО УМЦ
						<p>часов — 36 , год окончания 2016</p>
						<Myimage url={jpg1} width="100%" height="auto" />
					</li>
					<li>
						Курс «"Подготовка педагога к инновационной деятельности в образовательной 
						организации в условиях реализации ФГОС» ГОУ ВО МО МГОУ
						<p>часов — 72 , год окончания 2017</p>
						<Myimage url={jpg2} width="100%" height="auto" />
					</li>
					<li>
						Курс «Методика подготовки обучающихся 9-11 классов к итоговой аттестации по 
						русскому языку» ГБОУ ВО МО АСОУ
						<p>часов — 72 , год окончания 2017</p>
						<Myimage url={jpg3} width="100%" height="auto" />
					</li>
					<li>
						Курс "Практические вопросы использования электронных образовательных ресурсов в 
						образовательном процессе" НОУ ДПО "Институт новых технологий".
						<p>часов - 36, год окончания 2019</p>
						<Myimage url={jpg4} width="100%" height="auto" />
					</li>
					<li>
						Курс "Метод проектов в деятельности учителя русского языка в 
						соответствии с ФГОС" АНО ДПО "Мой университет"
						<p>часов - 72, год окончания 2019</p>
						<Myimage url={jpg5} width="100%" height="auto" />
					</li>
					<li>
						Курс "Современный урок литературы в соответствии с 
						требованиями ФГОС ООО и СОО" АНО ДПО "Мой университет"
						<p>часов - 72, год окончания - 2019</p>
						<Myimage url={jpg6} width="100%" height="auto" />
					</li>
					<li>
						Курс «Информационно-коммуникационные технологии в деятельности 
						учителя-предметника в условиях реализации ФГОС ООО» ГБОУ ВО МО АСОУ
						<p>часов - 72, год окончания - 2019</p>
						<Myimage url={jpg7} width="100%" height="auto" />
					</li>
					<li>
						Онлайн-курсы «Дистанционное обучение: организация процесса и 
						использование бесплатных приложений, курсов, видеолекций» Рособрсоюз
						<p>Часов — 16, год окончания - 2020</p>
						<Myimage url={jpg8} width="100%" height="auto" />
					</li>
					<li>
						Курс "Формирование и оценка функциональной грамотности школьников 
						(Международное исследование PISA)" ГОУ ВО МГОУ
						<p>Часов — 16, год окончания - 2020</p>
						<Myimage url={jpg9} width="100%" height="auto" />
					</li>
					<li>
						Курс "Преподавание русского языка и литературы на базовом и 
						углубленном уровнях в соответствии с требованиями ФГОС среднего 
						общего образования" АНОО ДПО Академия образования взрослых "Альтернатива"
						<p>Часов — 36, год окончания - 2020</p>
						<Myimage url={jpg10} width="100%" height="auto" />
					</li>
					<li>
						Курс “Реализация требований обновленных ФГОС ООО, 
						ФГОС СОО в работе учителя” ГОУ ВПО МГОУ, г. Мытищи.
						<p>Часов — 36, год окончания - 2022</p>
						<Myimage url={jpg11} width="100%" height="auto" />
					</li>
					<li>
						Курс “Реализация требований обновленных ФГОС ООО, ФГОС СОО в работе учителя 
						(русский язык)” ГБОУ ВО МО АСОУ, г. Мытищи.
						<p>Часов — 36, год окончания - 2023</p>
						<Myimage url={jpg12} width="100%" height="auto" />
					</li>
					<li>
						Курс “Реализация требований обновленных ФГОС ООО, 
						ФГОС СОО в работе учителя (литература)” ГБОУ ВО МО АСОУ, г. Мытищи.
						<p>Часов — 36, год окончания - 2023</p>
						<Myimage url={jpg13} width="100%" height="auto" />
					</li>
					<li>
						Курс “Функциональная грамотность: как применять знания в жизни” ООО «Учи.ру», г. Москва
						<p>Часов — 72, год окончания - 2024</p>
						<Myimage url={jpg14} width="100%" height="auto" />
					</li>
				</ol>
			</div>
		</div>
	)
}

export default ProfDev;