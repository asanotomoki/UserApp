import React from "react";
import { useCallback } from "react";
import axios from "axios";
import { UserType } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
	const { showMessage } = useMessage();
	const navigate = useNavigate();
	const [ loading, setLoading ] = React.useState(false);
	const { setLoginUser } = useLoginUser();

	const login = useCallback((id:string) => {
		setLoading(true);
		axios.get<UserType>(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then((res) => {
			if (res.data.id)
			{
				navigate("/home");
				const isAdmin = res.data.id === 10;
				setLoginUser({ ...res.data, isAdmin });
				showMessage({ title: "Login Success!", status: "success" });
			}
			else
			{
				showMessage({ title: "Login Failed!", status: "error" });
			}
		}).catch((err) => {
			showMessage({ title: "Login Failed!", status: "error" });
		}).finally(() => {
			setLoading(false);
		});
	}, [navigate, setLoading, showMessage, setLoginUser])
	return { login, loading };
}