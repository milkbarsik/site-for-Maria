import { FC } from "react";

type props = {
	title: string;
	refLink: React.RefObject<HTMLDivElement>;
	foo: (param: React.RefObject<HTMLDivElement>) => void;
}

const NavElem:FC<props> = ( {title, refLink, foo} ) => {
	return (
		<button 
			onClick={() => foo(refLink)}
			style={{
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
			>
			<p style={{
				margin: '0',
				textAlign: 'center'
			}}>
				{title}
			</p>
		</button>
	)
}

export default NavElem;