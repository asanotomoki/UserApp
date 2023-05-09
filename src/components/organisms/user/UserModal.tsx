import React from 'react';
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
} from '@chakra-ui/react';
import { ReadOnlyForm } from '../../molecules/Form/readOnlyForm';
import { PraimaryButton } from '../../atoms/button/PrimaryButton';
import { UserType } from '../../../types/api/user';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	user: UserType | undefined;
}

export const UserModal: FC<Props> = memo((props) => {
	const { isOpen, onClose, user } = props;
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>User Infomation</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Stack>
						<ReadOnlyForm title="UserName" value={user ? user.username : "xxxx"} />
						<ReadOnlyForm title="Full Name" value={user ? user.name : "xxxxxx"} />
						<ReadOnlyForm title="Mail" value={user ? user.email : "xxxx@gmail.com"} />
						<ReadOnlyForm title="Tel" value={user ? user.phone : "000-000-0000"} />
					</Stack>
				</ModalBody>
				<ModalFooter>
					<PraimaryButton onClick={onClose}>Close</PraimaryButton>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
})
