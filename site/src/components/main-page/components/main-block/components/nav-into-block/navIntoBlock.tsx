import { FC, useState } from "react";
import styles from './navIntoBlock.module.css';
import NavElem from "./nav-elem";

type props = {
	foo: (param: React.RefObject<HTMLDivElement | HTMLLIElement>) => void;
	refs: any;
	titles: Record<string, string>;
}

const NavIntoBlock:FC<props> = ( {foo, refs, titles} ) => {

	const render = () => {

		let elems:React.ReactNode[] = [];
	
		for (const key in refs) {
			elems.push(<NavElem key={key} title={titles[key]} refLink={refs[key]} foo={foo}/>);
		}
		return elems;
	}

	const [isActive, setActive] = useState<boolean>(false);

	return (
		<div className={isActive ? styles.ActiveWrapper : styles.wrapper}>
			<button onClick={() => setActive((prev) => {return !prev})} className={styles.navButton}>навигация</button>
			<div className={styles.elems}>
				{render()}
			</div>
		</div>
	)
}

export default NavIntoBlock;