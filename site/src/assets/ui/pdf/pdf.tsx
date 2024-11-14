import { FC } from "react";
import styles from './pdf.module.css';

type Tpdf = {
	src: string;
	height: string;
	width: string;
}

const Pdf:FC<Tpdf> = ( param ) => {
	return (
		<div className={styles.wrapper}>
			<embed src={param.src} type="application/pdf" style={{height: `${param.height}`, width: `${param.width}`}}></embed>
		</div>
	)
}

export default Pdf;