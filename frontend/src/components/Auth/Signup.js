import { useState } from "react";
import {
	VStack,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Button,
	useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Signup() {
	const [show, setShow] = useState(false);
	const toast = useToast();
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const history = useHistory();

	const submitHandler = async () => {
		setLoading(true);
		if (!name || !email || !password || !confirmPassword) {
			toast({
				title: "Please fill all the fields",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setLoading(false);
			return;
		}

		if (password !== confirmPassword) {
			toast({
				title: "Passwords does not match",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setLoading(false);
			return;
		}

		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};

			const data = axios.post("/api/user", { name, email, password }, config);

			toast({
				title: "Registration successfull",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});

			localStorage.setItem("userInfo", JSON.stringify(data));
			setLoading(false);
			history.push("/chats");
		} catch (error) {
			toast({
				title: error.response.data.message,
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setLoading(false);
		}
	};

	return (
		<VStack spacing="5px">
			<FormControl id="first-name" isRequired>
				<FormLabel>Name</FormLabel>
				<Input
					placeholder="Enter your name"
					onChange={e => setName(e.target.value)}
				/>
			</FormControl>
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
			<FormControl id="confirmPassword" isRequired>
				<FormLabel>Email</FormLabel>
				<InputGroup>
					<Input
						type={show ? "text" : "password"}
						placeholder="Enter your password"
						onChange={e => setConfirmPassword(e.target.value)}
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
				isLoading={loading}
			>
				Sign up
			</Button>
		</VStack>
	);
}
