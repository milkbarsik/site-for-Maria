import { useEffect, useRef } from "react";
import Aside from "./components/aside";
import MainBlock from "./components/main-block";
import styles from './mainPage.module.css';
import Footer from "../footer";
import { useTitle } from "./useTitle";


const MainPage = () => {
	const {
		title
	} = useTitle();

	const scrollBlock = useRef<HTMLDivElement>(null);

	useEffect(() => {
		scrollBlock.current?.scrollTo(0, 0);
	}, [title])

	return (
		<div ref={scrollBlock} className={styles.wrapper}>
			<div className={styles.container}>
				<Aside />
				<MainBlock/>
			</div>
			<Footer />
		</div>
	)
}

export default MainPage;