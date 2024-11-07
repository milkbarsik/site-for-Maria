import { FC } from "react";
import { mainBlockComponents } from "../../consts";
import styles from './main-block.module.css';

type props = {
	title: string;
}

const MainBlock:FC<props> = ( { title } ) => {

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