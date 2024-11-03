import {Routes, Route, Navigate} from 'react-router-dom';
import { adminRoutes, userRoutes } from '../..//routes';

const AppRouter = () => {
	const user = false;

	console.log(user);

	return (
		<Routes>
			{user && adminRoutes.map(( {path, Component} ) =>
				<Route key = {path} path = {path} element = {<Component/>}/>
			)}
			{userRoutes.map(( {path, Component} ) =>
				<Route key = {path} path = {path} element = {<Component/>}/>
			)}
			<Route path = "*" element = {<Navigate to={'/'}/>} />
		</Routes>
	);
};

export default AppRouter;