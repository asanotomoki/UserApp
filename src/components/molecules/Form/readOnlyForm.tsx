import React from "react";
import { memo, FC } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

type Props = {
	title: string;
	value: string;
}
export const ReadOnlyForm: FC<Props> = memo((props) => {
	const { title, value } = props;
	return (
		<FormControl>
			<FormLabel>{title}</FormLabel>
			<Input type="text" isReadOnly value={value}/>
		</FormControl>
	)
});