import React, { FC } from "react";
import Aside from "./components/aside";
import MainBlock from "./components/main-block";
import styles from './mainPage.module.css';



const MainPage:FC = () => {

	const [component, setComponent] = React.useState<null | React.ReactNode>(null);

	return (
		<div className={styles.wrapper}>
			<Aside foo={setComponent}/>
			<MainBlock Component={component}/>
		</div>
	)
}

export default MainPage;