import styles from './news.module.css';
import { postList } from "./consts";
import Post from "./component/post";

const News = () => {
	return (
		<div className={styles.wrapper}>
			<h1>Новости</h1>
			<div className={styles.newsBlock}>
				{postList.map((el) => {
					return <Post date={el.date} text={el.text} image={el.image}/>
				}).reverse()}
			</div>
		</div>
	)
}

export default News;