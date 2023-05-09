import React from 'react';
import { memo } from 'react';
import { FC } from 'react';
import { Stack, Image, Text } from '@chakra-ui/react'
import { Card } from '../../atoms/card/Card';

type Props = {
	userName: string;
	fullName: string;
	imageUrl: string;
}

export const UserCard: FC<Props> = memo((props) => {
	const { userName, fullName, imageUrl } = props;
	return (
		<Card>
			<Stack textAlign="center">
				<Image src={imageUrl} borderRadius="full" boxSize="160px" alt="user image" m="auto" />
				<Text fontSize="lg" fontWeight="bold">{userName}</Text>
				<Text fontSize="sm" color="gray">{fullName}</Text>
			</Stack>
		</Card>
	)
})
