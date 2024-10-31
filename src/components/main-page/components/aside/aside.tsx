import { FC } from "react";
import TitulPage from "../titul-page";
import React from "react";

type props = {
	foo: (component: React.ReactNode | null) => void
}

const Aside:FC<props> = ( { foo } ) => {

	const choseComponent = () => {
		foo(<TitulPage />);
	}

	React.useEffect(() => {
		choseComponent()
	}, []);

	return (
		<div>

		</div>
	)
}

export default Aside;