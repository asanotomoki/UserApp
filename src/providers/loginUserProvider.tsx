import React, { createContext, Dispatch, SetStateAction } from "react";
import { UserType } from "../types/api/user";

export type LoginUserContextType = {
	LoginUser: UserType | null;
	setLoginUser: Dispatch<SetStateAction<UserType | null>>;
}

export const LoginUserContext = createContext<LoginUserContextType>(
	{} as LoginUserContextType
);

type Props = {
	children: React.ReactNode;
}

export const LoginUserProvider: React.FC<Props> = ({ children }) => {
	const [LoginUser, setLoginUser] = React.useState<UserType | null>(null);
	return (
		<LoginUserContext.Provider value={{ LoginUser, setLoginUser }}>
			{children}
		</LoginUserContext.Provider>
	)
}