import { FC } from "react";
import styles from './navIntoBlock.module.css';

const NavIntoBlock:FC<{foo: () => void}> = ( {foo} ) => {
	return (
		<div className={styles.wrapper}>
			<button onClick={() => foo()}>навигация</button>
		</div>
	)
}

export default NavIntoBlock;