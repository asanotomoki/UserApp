import React, { useCallback, useEffect } from 'react';
import { memo, useState, FC } from 'react';
import { HeaderLayout } from '../templates/HeaderLayout';
import { Wrap, WrapItem, Spinner, Center} from '@chakra-ui/react'
import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers'
import { useDisclosure } from '@chakra-ui/react'
import { UserModal } from '../organisms/user/UserModal';
import { UserType } from '../../types/api/user';
import { useLoginUser } from '../../hooks/useLoginUser';

export const UserManagement: FC = memo(() => {
	const { getUsers, loading, users } = useAllUsers();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [ selectedUser, setSelectedUser ] = useState<UserType>();
	const onOpenModal = useCallback((user:UserType) => {
		setSelectedUser(user);
		onOpen()
	}, [setSelectedUser, onOpen]);
	useEffect(() => getUsers(), [getUsers]);
	const { LoginUser } = useLoginUser();
	console.log(LoginUser);
	return (
		<HeaderLayout >
			{loading ?
				<Center h="100vh"  >
					<Spinner></Spinner>
				</Center> :
				<Wrap p={{ base: 4, md: 10 }}>
					{users.map((user) => (
						<WrapItem
							key={user.id}
							mx="auto"
							_hover={{ opacity: 0.8 }}
							onClick={()=>onOpenModal(user)}
						>
							<UserCard
								imageUrl='https://source.unsplash.com/random'
								userName={user.username}
								fullName={user.name}
							/>
						</WrapItem>
					))}
				</Wrap>
			}
			<UserModal isOpen={isOpen} onClose={onClose} user={selectedUser}/>
		</HeaderLayout>
	)
})
