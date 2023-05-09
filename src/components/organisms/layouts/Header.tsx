import React, { useCallback } from 'react';
import { memo } from 'react';
import { FC } from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import { PcMenu } from '../../molecules/Menu/PcMenu';
import { SpMenu } from '../../molecules/Menu/SpMenu';
import { useNavigate } from 'react-router-dom';
import { MenuType } from '../../molecules/Menu/Menutypes';


export const Header: FC = memo(() => {
	const navigate = useNavigate();
	const onClickHome = useCallback(() => navigate("/home"), [navigate]);
	const onClickUser = useCallback(() => navigate("/home/user_management"), [navigate]);
	const onClickSetting = useCallback(() => navigate("/home/setting"), [navigate]);
	const onClickLogin = useCallback(() => {navigate("/login")}, [navigate]);
	const MenuArray:Array<MenuType> = [
		{ title: "ユーザー一覧", path: "/home/user_management", onClick: () => onClickUser},
		{ title: "設定", path: "/home/setting", onClick: () => onClickSetting },
		{ title: "Home", path: "/home", onClick: () => onClickHome},
		{ title: "Login", path: "/Login", onClick: () => onClickLogin},
	];
	return (
		<Flex as="nav" bg="teal.800" color="gray.50" align={"center"} justify={"space-between"} padding={{ base: 3, md: 5 }}>
			<Flex align="center" as="a" mr="8" _hover={{ coursor: "pointer" }} onClick={onClickHome}>
				<Heading as="h1" fontSize={{ base: "md", md: "lg" }}>ユーザー表示アプリ</Heading>
			</Flex>
			<PcMenu MenuArray={MenuArray}/>
			<SpMenu MenuArray={MenuArray}/>
		</Flex>
	)
})
