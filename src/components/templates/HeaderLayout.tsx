import React from 'react';
import { memo, FC, ReactNode } from 'react';
import { Header } from '../organisms/layouts/Header';

type Props = {
	children: ReactNode;
}

export const HeaderLayout: FC<Props> = memo(({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
})
