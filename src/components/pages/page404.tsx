import React from 'react';
import { memo } from 'react';
import { FC } from 'react';
import { HeaderLayout } from '../templates/HeaderLayout';

export const Page404:FC = memo(() => {
	return (
		<HeaderLayout >
			<p>Page404</p>
		</HeaderLayout>
	)
})
