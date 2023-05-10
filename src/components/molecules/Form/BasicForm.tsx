import { memo, FC } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

type Props = {
	title: string;
	value: string;
	setFunction: (val : string) => void;
}
export const BasicForm: FC<Props> = memo((props) => {
	const { title, value, setFunction } = props;
	const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		setFunction(e.target.value);
	}
	return (
		<FormControl>
			<FormLabel>{title}</FormLabel>
			<Input isReadOnly={false} type="text" value={value} onChange={onChange}/>
		</FormControl> 
	)
});