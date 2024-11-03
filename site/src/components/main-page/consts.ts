import Activity from "./components/main-block/components/activity";
import Education from "./components/main-block/components/education";
import MetodActivity from "./components/main-block/components/metod-activity";
import Productivity from "./components/main-block/components/productivity";
import ProfAward from "./components/main-block/components/prof-award";
import ProfCompetence from "./components/main-block/components/prof-competence";
import ProfContest from "./components/main-block/components/prof-contest";
import ProfDev from "./components/main-block/components/prof-dev";
import TitulPage from "./components/main-block/components/titul-page";

export interface ImainBlockComponents {
	Component: React.FC;
	title: string;
}

export const mainBlockComponents: ImainBlockComponents[] = [
	{
		Component: TitulPage,
		title: 'Титульная страница',
	},
	{
		Component: Education,
		title: 'Образование',
	},
	{
		Component: Productivity,
		title: 'Продуктивность образовательной деятельности',
	},
	{
		Component: Activity,
		title: 'Деятельность по развитию обучающихся',
	},
	{
		Component: MetodActivity,
		title: 'Методическая деятельность',
	},
	{
		Component: ProfContest,
		title: 'Участие в профессиональных конкурсах',
	},
	{
		Component: ProfDev,
		title: 'Повышение квалификации',
	},
	{
		Component: ProfCompetence,
		title: 'Профессиональная компетентность',
	},
	{
		Component: ProfAward,
		title: 'Профессиональные награды',
	},
]