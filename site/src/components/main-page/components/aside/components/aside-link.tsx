import { FC } from "react";
import styles from './aside-link.module.css';

type Ttitle = {
	title: string;
	returnTitle: (param: string) => any;
	isActive: string;
	setActive: (param: string) => any;
}

const AsideLink:FC<Ttitle> = ( { title, returnTitle, isActive, setActive } ) => {


const clicked = () => {
	returnTitle(title);
	setActive(title);
}

	return (
		<div className={styles.wrapper} onClick={clicked}>
			<p className={ `${styles.content} ${title === isActive ? styles.active : ''}` }>{title}</p>
		</div>
	)
}

export default AsideLink;