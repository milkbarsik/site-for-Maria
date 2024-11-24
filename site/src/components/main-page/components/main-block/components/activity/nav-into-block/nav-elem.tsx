import { FC } from "react";

type props = {
	title: string;
	refLink: React.RefObject<HTMLDivElement>;
	foo: (param: React.RefObject<HTMLDivElement>) => void;
}

const NavElem:FC<props> = ( {title, refLink, foo} ) => {
	return (
		<button onClick={() => foo(refLink)}>
			<p>
				{title}
			</p>
		</button>
	)
}

export default NavElem;