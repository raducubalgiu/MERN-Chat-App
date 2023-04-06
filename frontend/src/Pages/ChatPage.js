import { ChatState } from "../Context/chatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";

export default function ChatPage() {
  const { user } = ChatState();

  console.log("USER!!", user);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "!00%",
          height: "91.5vh",
          padding: "10px",
        }}
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </div>
    </div>
  );
}
