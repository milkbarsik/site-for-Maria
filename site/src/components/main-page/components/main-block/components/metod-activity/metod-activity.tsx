import { FC } from "react";
import styles from './metod-activity.module.css';
import Myimage from "../../../../../../assets/ui/image";
import titul from "assets/metod-activity/titul.jpg";
import Pdf from "../../../../../../assets/ui/pdf";

const MetodActivity:FC = () => {
	
	return (
		<div className={styles.wrapper}>
			<h1>Методическая деятельность</h1>
			<Myimage url={titul} height={'auto'} width={'100%'} />
			<p>
				Как учитель высшей категории, я постоянно делюсь наработанным опытом, 
				результатами своей методической деятельности.
			</p>
			<div className={styles.contentWrapper}>
				<ol>
					<li>
						Как учитель-предметник, я ежегодно разрабатываю учебные программы 
						по предметам русский язык и литература.
					</li>
					<li>

					</li>
				</ol>
			</div>
		</div>
	)
}

export default MetodActivity;