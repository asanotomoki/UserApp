import { Home } from '../components/pages/Home';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/userManagement';

export const HomeRoutes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/setting',
		element: <Setting />,
	},
	{
		path: '/user_management',
		element: <UserManagement />,
	},
];