import { FC } from "react";

type Ttitle = {
	title: string;
	returnTitle: (param: string) => any;
}

const AsideLink:FC<Ttitle> = ( { title, returnTitle } ) => {

	return (
		<div onClick={() => returnTitle(title)}>
			<p>{title}</p>
		</div>
	)
}

export default AsideLink;