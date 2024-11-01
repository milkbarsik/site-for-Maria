import { FC } from "react";
import { mainBlockComponents } from "../../consts";

type props = {
	title: string;
}

const MainBlock:FC<props> = ( { title } ) => {

	const componentRender = () => {
		const Component = mainBlockComponents.find((el) => el.title === title)?.Component;
		if( Component ) return <Component />
	}

	return (
		<div>
			{title !== null && componentRender()}
		</div>
	)
}

export default MainBlock;