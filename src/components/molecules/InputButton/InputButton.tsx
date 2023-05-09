import React from "react";
import { memo, FC } from "react";
import { Stack, Input } from "@chakra-ui/react";
import { PraimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
	placeholder: string;
	buttonText: string;
	onClick?: () => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	loading?: boolean;
}
export const InputButton: FC<Props> = memo((props) => {
	const { placeholder, buttonText, onChange, onClick, disabled=false, loading=false } = props;
	return (
		<Stack spacing={6}>
			<Input
			placeholder={placeholder} 
			onChange={onChange}
			/>
			<PraimaryButton onClick={onClick} disabled={disabled} loading={loading}>{buttonText}</PraimaryButton>
		</Stack>
	)
});