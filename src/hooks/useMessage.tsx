import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

type Props = {
	title: string;
	status: "success" | "error" | "warning" | "info";
}
export const useMessage = () => {
	const toast = useToast();
	const showMessage = useCallback((props:Props) => {
		const { title, status } = props;
		toast({
			title: title,
			description: "We've created your account for you.",
			status: status,
			duration: 9000,
			isClosable: true,
		  })
	},[toast]);
	return { showMessage };
}