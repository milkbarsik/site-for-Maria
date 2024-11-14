import { FC } from "react";
import styles from './image.module.css';

type Timage = {
	url: string;
	height: string;
	width: string;
}

const Myimage:FC<Timage> = ( param ) => {
	return (
		<div className={styles.wrapper}>
			<img src={param.url} alt="" style={{height: `${param.height}`, width: `${param.width}`}} className={styles.image}/>
		</div>
	)
}

export default Myimage;