import { FC } from "react";
import styles from './navIntoBlock.module.css';
import NavElem from "./nav-elem";

type props = {
	foo: (param: React.RefObject<HTMLDivElement>) => void;
	refs: any;
}

const titles: Record<string, string> = {
	sectionTitul: "В начало",
	section2016: "2016-2017",
	section2017: "2017-2018",
	section2018: "2018-2019",
	section2019: "2019-2020",
	section2020: "2020-2021",
	section2021: "2021-2022",
	section2022: "2022-2023",
	section2023: "2023-2024",
	section2024: "2024-2025",
}

const NavIntoBlock:FC<props> = ( {foo, refs} ) => {

	const render = () => {

		let elems:React.ReactNode[] = [];
	
		for (const key in refs) {
			elems.push(<NavElem key={key} title={titles[key]} refLink={refs[key]} foo={foo}/>);
		}
		return elems;
	}

	return (
		<div className={styles.wrapper}>
			{render()}
		</div>
	)
}

export default NavIntoBlock;