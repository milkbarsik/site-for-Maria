import { FC } from "react";
import styles from './image.module.css';

type Timage = {
	url: string;
	position: string;
	size: string;
	height: string;
	width: string;
	attachment?: string;
}

const Myimage:FC<Timage> = ( param ) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image} style={{
				background: `url(${param.url})`,
				backgroundPosition: `${param.position}`,
				backgroundSize: `${param.size}`,
				height: `${param.height}`,
				width: `${param.width}`,
				backgroundAttachment: `${param?.attachment}`,
				backgroundRepeat: "no-repeat"
			}}>
				<img src={param.url} alt="" style={{height: `${param.height}`, width: `${param.width}`}} className={styles.help}/>
			</div>
		</div>
	)
}

export default Myimage;