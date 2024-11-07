import React, { FC } from "react";
import Aside from "./components/aside";
import MainBlock from "./components/main-block";
import styles from './mainPage.module.css';
import Footer from "../footer";



const MainPage:FC = () => {

	const [title, setTitle] = React.useState<string>('Титульная страница');

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Aside returnTitle={setTitle}/>
				<MainBlock title={title}/>
			</div>
			<Footer />
		</div>
	)
}

export default MainPage;