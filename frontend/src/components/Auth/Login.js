import React, { useState } from "react";
import {
	VStack,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	Button,
	InputRightElement,
} from "@chakra-ui/react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);

	const submitHandler = () => {};

	return (
		<VStack spacing="5px">
			<FormControl id="email" isRequired>
				<FormLabel>Email</FormLabel>
				<Input
					placeholder="Enter your enamil"
					onChange={e => setEmail(e.target.value)}
				/>
			</FormControl>
			<FormControl id="password" isRequired>
				<FormLabel>Email</FormLabel>
				<InputGroup>
					<Input
						type={show ? "text" : "password"}
						placeholder="Enter your password"
						onChange={e => setPassword(e.target.value)}
					/>
					<InputRightElement width="4.5em">
						<Button h="1.75em" size="sm" onClick={() => setShow(show => !show)}>
							{show ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>
			<Button
				colorScheme="blue"
				width="100%"
				style={{ marginTop: 15 }}
				onClick={submitHandler}
			>
				Sign up
			</Button>
			<Button
				variant="solid"
				colorScheme="red"
				width="100%"
				onClick={() => {
					setEmail("guest@example.com");
					setPassword("123456");
				}}
			>
				Sign up
			</Button>
		</VStack>
	);
}
