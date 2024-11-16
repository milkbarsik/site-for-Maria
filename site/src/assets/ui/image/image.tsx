import { FC } from "react";
import styles from './image.module.css';

type Timage = {
	url: string;
	height: string;
	width: string;
}

const Myimage:FC<Timage> = ( param ) => {
	return (
		<a href={param.url} target="_blank" className={styles.wrapper}>
			<img src={param.url} alt="" style={{height: `${param.height}`, width: `${param.width}`}} className={styles.image}/>
		</a>
	)
}

export default Myimage;