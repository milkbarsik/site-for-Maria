import { mainBlockComponents } from "../../consts";
import AsideLink from "./components";
import styles from './aside.module.css';


const Aside = () => {

	const linkRender = () => {
		return mainBlockComponents.map((el) => {
			return <AsideLink
				key={el.title}
				title={el.title}
			/>
		});
	}

	return (
		<div className={styles.wrapper}>
			{linkRender()}
		</div>
	)
}

export default Aside;