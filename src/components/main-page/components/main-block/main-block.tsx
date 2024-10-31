import React, { FC } from "react";

type props = {
	Component: React.ReactNode | null;
}

const MainBlock:FC<props> = ( { Component } ) => {

	return (
		<div>
			{Component !== null && Component}
		</div>
	)
}

export default MainBlock;