import React from "react";
import { memo, FC } from "react";
import { IconButton, MenuButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const MenuIconButton: FC = memo(() => {
	return (
			<MenuButton
				as={IconButton}
				aria-label='Options'
				icon={<HamburgerIcon />}
				variant='outline'
				display={{ base: 'block', md: 'none' }}
			>
				メニュー
			</MenuButton>
	)
});