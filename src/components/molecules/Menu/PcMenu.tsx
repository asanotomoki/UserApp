import React from "react";
import { memo, FC } from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { MenuType } from "./Menutypes";

type Props = {
	MenuArray: Array<MenuType>;
}

export const PcMenu: FC<Props> = memo((props) => {
	const { MenuArray } = props;
	return (
		<Flex align="center" fontSize="sm" flexGrow={2}
			display={{ base: "none", md: "flex" }}
		>
			{
				MenuArray.map((item, index) => (
					<Box key={index} pr={4} color="white">
						<Link onClick={item.onClick()} >{item.title}</Link>
					</Box>
				))
			}
		</Flex>
	)
});