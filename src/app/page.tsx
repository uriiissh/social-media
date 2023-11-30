import { Chat } from "./screens/(chats)/Chat";
import { CurrentUser } from "./screens/(chats)/CurrentUser";
import { ChatsList } from "./screens/(chats)/ChatsList";


export default function ChatsPage() {
  return (
    <div>
      <div>
        <CurrentUser/>
        <ChatsList/>
      </div>
      <div>
        <Chat />
      </div>
    </div>
  )
}
