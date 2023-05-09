import React from 'react';
import { memo, useState } from 'react';
import { FC } from 'react';
import { HeaderLayout } from '../templates/HeaderLayout';
import { Flex, Heading, Box } from '@chakra-ui/react';
import { InputButton } from '../molecules/InputButton/InputButton';
import { useAuth } from '../../hooks/useAuth';

export const Login: FC = memo(() => {
	const { login, loading } = useAuth();
	const [userId, setUserId] = useState('');

	const onChangeUserID = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserId(e.target.value);
	}

	const onClickLogin = () => 
	{
		login(userId);
		

	};
	return (
		<HeaderLayout >
			<Flex justify="center" height="100vh" alignItems="center">
				<Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
					<Heading as="h3" size="lg" textAlign="center" color="teal.500">
						ユーザー管理アプリ
					</Heading>
					<InputButton
						placeholder='user ID'
						buttonText='ログイン'
						onChange={onChangeUserID}
						onClick={onClickLogin}
						disabled={userId === "" || loading}
						loading={loading}
					/>
				</Box>
			</Flex>
		</HeaderLayout>
	)
})
