import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ChatPage() {
	const [chats, setChats] = useState([]);

	const fetchChats = async () => {
		const response = await axios.get("/api/chats");
		setChats(response.data);
	};

	useEffect(() => {
		fetchChats();
	}, []);

	console.log(chats);

	return (
		<div>
			{chats.map(chat => (
				<div key={chat._id}>{chat.chatName}</div>
			))}
		</div>
	);
}
