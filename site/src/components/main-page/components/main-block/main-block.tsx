import { mainBlockComponents } from "../../consts";
import styles from './main-block.module.css';
import { useTitle } from "../../useTitle";


const MainBlock = () => {

	const {
		title
	} = useTitle();

	const componentRender = () => {
		const Component = mainBlockComponents.find((el) => el.title === title)?.Component;
		if( Component ) return <Component />
	}

	return (
		<div className={styles.wrapper}>
			{title !== null && componentRender()}
		</div>
	)
}

export default MainBlock;