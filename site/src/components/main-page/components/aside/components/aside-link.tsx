import { FC } from "react";
import styles from './aside-link.module.css';
import { useTitle } from "../../../useTitle";

type Ttitle = {
	title: string;
}

const AsideLink:FC<Ttitle> = ( { title } ) => {

	const {
		title: stateTitle,
		setTitle
	} = useTitle();

const clicked = () => {
	setTitle(title);
}

	return (
		<div className={styles.wrapper} onClick={clicked}>
			<p className={ `${styles.content} ${title === stateTitle ? styles.active : ''}` }>{title}</p>
		</div>
	)
}

export default AsideLink;