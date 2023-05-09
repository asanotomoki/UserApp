import React from "react";
import { memo, FC } from "react";
import { Box } from "@chakra-ui/react";

type Props = {
	children: React.ReactNode;
}
export const Card: FC<Props> = memo(({ children }) => {
	return (
		<Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
			{children}
		</Box>
	)
});