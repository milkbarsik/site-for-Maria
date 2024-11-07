import React, { FC } from "react";
import { mainBlockComponents } from "../../consts";
import AsideLink from "./components";
import styles from './aside.module.css';

type props = {
	returnTitle: (title: string) => void
}

const Aside:FC<props> = ( { returnTitle } ) => {

	const [activeLink, setActive] = React.useState('Титульная страница');

	const linkRender = () => {
		return mainBlockComponents.map((el) => {
			return <AsideLink
				key={el.title}
				title={el.title}
				returnTitle={returnTitle}
				isActive={activeLink}
				setActive={setActive}
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