import React from 'react';
import { memo } from 'react';
import { FC } from 'react';
import { HeaderLayout } from '../templates/HeaderLayout';

export const Setting:FC = memo(() => {
	return (
		<HeaderLayout >
			<p>Setting</p>
		</HeaderLayout>
	)
})
