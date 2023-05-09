import React, { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from '../components/pages/Login';
import { HomeRoutes } from './HomeRoutes';
import { Page404 } from '../components/pages/page404';
import { LoginUserProvider } from '../providers/loginUserProvider';

export const Router: FC = memo(() => {
	return (
		<LoginUserProvider>
			<Routes>
				<Route path="/login" element={<Login />} />
				{
					HomeRoutes.map((route) => (
						<Route key={route.path} path={`/home${route.path}`} element={route.element} />
					))
				}
				<Route path="*" element={<Page404 />} />
			</Routes >
		</LoginUserProvider>
	)
})