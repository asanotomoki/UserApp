import React, { useEffect } from 'react';
import { memo } from 'react';
import { FC } from 'react';
import {
	Stack, Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Flex,
	Box,
} from '@chakra-ui/react';
import { ReadOnlyForm } from '../../molecules/Form/readOnlyForm';
import { BasicForm } from '../../molecules/Form/BasicForm';
import { PraimaryButton } from '../../atoms/button/PrimaryButton';
import { UserType } from '../../../types/api/user';
import { useLoginUser } from '../../../hooks/useLoginUser';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	user: UserType | undefined;
}

export const UserModal: FC<Props> = memo((props) => {
	const { isOpen, onClose, user } = props;
	const { LoginUser } = useLoginUser();
	const [userName, setUserName] = React.useState<string>("xxxx");
	const [fullName, setFullName] = React.useState<string>("xxxx");
	const [email, setEmail] = React.useState<string>("xxxxxxxx@gmail.com");
	const [phone, setPhone] = React.useState<string>("000-000-0000");
	useEffect(() => {
		setUserName(user?.username ?? "");
		setFullName(user?.name ?? "");
		setEmail(user?.email ?? "");
		setPhone(user?.phone ?? "");
	}, [user])
	const userInfo = [
		{
			title: "UserName",
			value: userName,
			setFunction: setUserName,
		},
		{
			title: "FullName",
			value: fullName,
			setFunction: setFullName,
		},
		{
			title: "Email",
			value: email,
			setFunction: setEmail,
		},
		{
			title: "Phone",
			value: phone,
			setFunction: setPhone,
		},
	]
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>User Infomation</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Stack>
						{
							userInfo.map((info) => (
								LoginUser?.isAdmin! ?
									<BasicForm key={user?.id} title={info.title} value={info.value} setFunction={info.setFunction} /> :
									<ReadOnlyForm key={user?.id} title={info.title} value={info.value} />
							))
						}
					</Stack>
				</ModalBody>
				<ModalFooter>
					<Flex>
						<Box mx={1}>
							{LoginUser?.isAdmin && <PraimaryButton onClick={onClose}>Update</PraimaryButton>}
						</Box>
						<Box mx={1}>
							<PraimaryButton onClick={onClose}>Close</PraimaryButton>
						</Box>
					</Flex>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
})
