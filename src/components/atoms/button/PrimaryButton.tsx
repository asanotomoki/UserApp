import React from "react";
import { memo, FC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
	children: React.ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	loading?: boolean;
}
export const PraimaryButton: FC<Props> = memo(({ children, onClick, disabled, loading }) => {
	return (
		<Button bg="teal.500" color="white" _hover={{ opacity: 0.8 }} onClick={onClick} 
		disabled={disabled} isLoading={loading}
		>
			{children}
		</Button>
	)
});