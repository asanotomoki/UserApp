import React from 'react';
import { memo } from 'react';
import { FC } from 'react';
import { HeaderLayout } from '../templates/HeaderLayout';

export const Home:FC = memo(() => {
	return (
		<HeaderLayout >
			<p>Home</p>
		</HeaderLayout>
	)
})
