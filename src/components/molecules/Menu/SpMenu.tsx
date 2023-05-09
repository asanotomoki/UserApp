import React from "react";
import { memo, FC } from "react";
import { Menu } from "@chakra-ui/react";
import { MenuLists } from '../../atoms/MenuLists';
import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuType } from "./Menutypes";

type Props = {
	MenuArray: Array<MenuType>;
}

export const SpMenu:FC<Props> = memo((props) => {
	const { MenuArray } = props;
	return (
		<>
			<Menu>
				<MenuLists MenuArray={MenuArray} />
				<MenuIconButton />
			</Menu>
		</>
	)
});