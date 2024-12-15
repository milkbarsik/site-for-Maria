import { FC } from "react";
import styles from './post.module.css';
import { post } from "../consts";
import Myimage from "../../../../../../../assets/ui/image";

const Post:FC<post> = ({text, date, image}) => {
	return (
		<div className={styles.wrapper}>
			<h3>{date}</h3>
			<p>{text}</p>
			{image.map((el) => {
				return <Myimage url={el} width="auto" height="80vh"/>
			})}
		</div>
	)
}

export default Post;