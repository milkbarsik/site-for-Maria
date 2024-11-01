import React, { FC } from "react";
import Aside from "./components/aside";
import MainBlock from "./components/main-block";
import styles from './mainPage.module.css';



const MainPage:FC = () => {

	const [title, setTitle] = React.useState<string>('Титульная страница');

	return (
		<div className={styles.wrapper}>
			<Aside returnTitle={setTitle}/>
			<MainBlock title={title}/>
		</div>
	)
}

export default MainPage;