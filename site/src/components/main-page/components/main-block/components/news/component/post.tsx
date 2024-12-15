import { FC } from "react";
import styles from './post.module.css';
import { post } from "../consts";
import Myimage from "../../../../../../../assets/ui/image";
import Pdf from "../../../../../../../assets/ui/pdf";

const Post:FC<post> = ({text, date, image}) => {
	return (
		<div className={styles.wrapper}>
			<h3>{date}</h3>
			<p>{text}</p>
			{image.map((el) => {
				if(el.split('.').at(-1) === 'pdf') {
					console.log(el);
					return <Pdf src={el} width="100%" height="100vh" />
				}
				return <Myimage url={el} width="auto" height="80vh"/>
			})}
		</div>
	)
}

export default Post;