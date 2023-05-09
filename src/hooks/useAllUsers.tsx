import { useCallback, useState } from "react";
import axios from "axios";
import { UserType } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
	const { showMessage } = useMessage();
	const [ loading, setLoading ] = useState(false);
	const [ users, setUsers ] = useState(Array<UserType>);

	const getUsers = useCallback(() => {
		setLoading(true);
		axios.get<Array<UserType>>(`https://jsonplaceholder.typicode.com/users/`)
		.then((res) => {
			setUsers(res.data);
		}).catch((err) => {
			showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
		}).finally(() => {
			setLoading(false);
		});
	}, [showMessage])
	return { getUsers, loading, users };
}