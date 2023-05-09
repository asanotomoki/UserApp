import React from "react";
import { memo, FC } from "react";
import { Box, Link, MenuItem, MenuList } from "@chakra-ui/react";
import { MenuType } from "../molecules/Menu/Menutypes";

type Props = {
	MenuArray: Array<MenuType>;
}

export const MenuLists: FC<Props> = memo((props) => {
	const { MenuArray } = props;
	return (
		<MenuList>
			{
				MenuArray.map((item, index) => (
					<MenuItem key={index}>
						<Box pr={4} onClick={item.onClick()} color="teal"><Link>{item.title}</Link></Box>
					</MenuItem>
				))
			}
		</MenuList>
	)
});