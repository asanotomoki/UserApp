import React, { createContext, Dispatch, SetStateAction } from "react";
import { UserType } from "../types/api/user";

type isAdminUser = UserType & { isAdmin: boolean }

export type LoginUserContextType = {
	LoginUser: isAdminUser| null;
	setLoginUser: Dispatch<SetStateAction<isAdminUser | null>>;
}

export const LoginUserContext = createContext<LoginUserContextType>(
	{} as LoginUserContextType
);

type Props = {
	children: React.ReactNode;
}

export const LoginUserProvider: React.FC<Props> = ({ children }) => {
	const [LoginUser, setLoginUser] = React.useState<isAdminUser | null>(null);
	return (
		<LoginUserContext.Provider value={{ LoginUser, setLoginUser }}>
			{children}
		</LoginUserContext.Provider>
	)
}